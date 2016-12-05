'use strict'

const Schema = use('Schema')

class FinishesTableSchema extends Schema {

  up () {
    this.create('finishes', (table) => {
      table.increments()
      table.integer('userid').notNullable()
      table.integer('taskid').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('finishes')
  }

}

module.exports = FinishesTableSchema
