'use strict'

const Schema = use('Schema')

class TasksTableSchema extends Schema {

  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.integer('userid').notNullable()
      table.string('name').notNullable()
      table.string('text').notNullable()
      table.integer('level').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }

}

module.exports = TasksTableSchema
