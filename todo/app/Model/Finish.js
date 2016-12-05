'use strict'

const Lucid = use('Lucid')

class Finish extends Lucid {
    user () {
        return this.belongsTo('App/Model/User')
    }
    task () {
        return this.belongsTo('App/Model/Task')
    }
}

module.exports = Finish
