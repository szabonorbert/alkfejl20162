'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
  
  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  task () {
    return this.hasMany('App/Model/Task')
  }
  finish () {
    return this.hasMany('App/Model/Finish')
  }
  don () {
    return this.belongsTo('App/Model/Don')
  }

}

module.exports = User
