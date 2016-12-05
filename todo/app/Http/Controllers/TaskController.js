'use strict'

const Task = use('App/Model/Task')

class TaskController {
    * index(req, res){
        //console.log(currentUser);
        const tasks = yield Task.all()
        yield res.sendView('main', {
            tasks: tasks.toJSON()
        })
    }
}

module.exports = TaskController
