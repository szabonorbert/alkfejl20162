'use strict'

const Task = use('App/Model/Task')
const User = use('App/Model/User')
const Finish = use('App/Model/Finish')
const Database = use('Database')

class TaskController {
    * index(req, res){
        const tasks = yield Task.all();
        const tasks_j = tasks.toJSON();
        const finish = yield Finish.all();
        const finish_j = finish.toJSON();
        const user = yield req.auth.getUser();

        for (var i = 0; i<tasks_j.length; i++){
            //show in list
            var show = true;
            for (var j = 0; j<finish_j.length && show; j++){
                if (finish_j[j].taskid == tasks_j[i].id) show = false;
            }
            tasks_j[i].show=1;
            if (!show) tasks_j[i].show=0;

            //del btn
            if (user != undefined && tasks_j[i].userid == user.id) tasks_j[i].showdel = true;
        }
        
        yield res.sendView('main', {    
            tasks: tasks_j
        })
    }

    * do (req, res){
        const taskId = req.param('id');
        const user = yield req.auth.getUser();

        const fin = new Finish();
        fin.userid = user.id;
        fin.taskid = taskId;
        yield fin.save();
        res.redirect('/')
    }

    * del (req, res) {
        const task = yield Task.find(req.param('id'))
        const user = yield req.auth.getUser();
        if (user.id == task.userid){
            yield task.delete()
        }
        res.redirect('/')
    }

    * history (req, res){
        const tasks = yield Task.all();
        const tasks_j = tasks.toJSON();
        const finish = yield Finish.all();
        const finish_j = finish.toJSON();
        const users = yield User.all();
        const users_j = users.toJSON();

        for (var i = 0; i<tasks_j.length; i++){
            //console.log(tasks_j[0]);
            //show in list
            var show = false;
            for (var j = 0; j<finish_j.length && !show; j++){
                if (finish_j[j].taskid == tasks_j[i].id){
                    show = true;
                    /*console.log("-----------")
                    console.log(finish_j[i])
                    console.log("-----------")*/
                    tasks_j[i].fin_uid = finish_j[j].userid;
                    tasks_j[i].date = finish_j[j].created_at;
                }
            }
            /*console.log("-----------")
            console.log(tasks_j[i])
            console.log("-----------")*/
            tasks_j[i].show=0;
            if (show){
                tasks_j[i].show=1;
                //get user
                var gotname = false;
                for (var j = 0; j<users_j.length && !gotname; j++){
                    if (users_j[j].id == tasks_j[i].fin_uid){
                        gotname = true;
                        console.log(users_j[j].id)
                        tasks_j[i].fin_uname = users_j[j].username;
                    }
                }
            }

            console.log(tasks_j)

            yield res.sendView('history', {
                tasks: tasks_j
            })
        }
    }

    * add(req, res){
        //todo
    }

    * showAdd(req, res){
        //todo
    }
}

module.exports = TaskController
