'use strict'

const Database = use('Database')
const User = use('App/Model/User')
const Don = use('App/Model/Don')
const Hash = use('Hash')
const Validator = use('Validator')
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
            yield req.auth.attempt(email, password)
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
        res.redirect('/')
    }
}

module.exports = UserController
