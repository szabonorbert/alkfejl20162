'use strict'

const Lucid = use('Lucid')

class Task extends Lucid {
    user () {
        return this.belongsTo('App/Model/User')
    }
    finish () {
        return this.belongsTo('App/Model/Finish')
    }
}

module.exports = Task
