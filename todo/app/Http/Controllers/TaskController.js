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
        //todo
    }

    * add(req, res){
        //todo
    }

    * showAdd(req, res){
        //todo
    }
}

module.exports = TaskController
