'use strict'

const Schema = use('Schema')

class DonsTableSchema extends Schema {

  up () {
    this.create('dons', (table) => {
      table.increments()
      table.integer('userid').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('dons')
  }

}

module.exports = DonsTableSchema
