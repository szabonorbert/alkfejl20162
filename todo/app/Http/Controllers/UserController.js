'use strict'

const Database = use('Database')
const User = use('App/Model/User')
const Don = use('App/Model/Don')
const Hash = use('Hash')
const Validator = use('Validator')
const View = use('View');
class UserController {
    
    //reg

    * reg(req,res){
        yield res.sendView('reg');
    }
    * doReg (req, res) {
        // 1. input adatok kinyerése
        const empData = req.all()

        // 2. kinyert adatok validálása
        const rules = {
            'username': 'required',
            'email': 'required|email',
            'password': 'required|min:4'
        }

        const validation = yield Validator.validateAll(empData, rules)
        if (validation.fails()) {
            yield req
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()

            res.redirect('/reg')
            return
        }

        // 3. business logic
        const user = new User
        user.username = empData.username
        user.email = empData.email
        user.password = yield Hash.make(empData.password)

        yield user.save()
        yield req.auth.login(user)

        //TODO: keresztapa?
        //const userId = yield req.auth.getUser().id


        // 4. válasz generálása
        res.redirect('/')
    }

    //login

    * login(req,res){
        console.log(req.auth)
        yield res.sendView('login');
    }

    * doLogin (req, res) {
        const email = req.input('email')
        const password = req.input('password')

        try {
            //van ilyen user + don tábla? ha ddd[0] == undefined, akkor nem don
            const ddd = yield Database.table('users').innerJoin('dons', 'users.id', 'dons.userid').where('email', email)
            
            yield req.auth.attempt(email, password)

            if (ddd[0] == undefined){
                View.global('isGodfather', 0)
            } else {
                View.global('isGodfather', 1)
            }
            

            res.redirect('/')

        } catch (ex) {
            console.log("EX: "+ ex)
            yield req
                .with({ error: 'Rossz belépési adatok.' })
                .flash()
            
            res.redirect('/login')
        }

    }

    * doLogout (req, res) {
        yield req.auth.logout()
        View.global('isGodfather', 0)
        res.redirect('/')
    }
}

module.exports = UserController
