'use strict'

const Lucid = use('Lucid')

class Don extends Lucid {
    user () {
        return this.belongsTo('App/Model/User')
    }
}

module.exports = Don
