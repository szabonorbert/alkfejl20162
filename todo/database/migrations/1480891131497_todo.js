'use strict'

const Schema = use('Schema')

class TodoTableSchema extends Schema {

  up () {
    this.create('todo', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('todo')
  }

}

module.exports = TodoTableSchema
