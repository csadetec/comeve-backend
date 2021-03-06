'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email', 250).notNullable().unique()
      table.string('name', 250 ).notNullable()
      table.string('password', 60).notNullable()
      table.string('sector_name', 100).notNullable()
      table.integer('sector_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
