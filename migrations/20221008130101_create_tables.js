/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('persons', (table) => {
    table.increments('id').primary();
    table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updatedAt').notNullable().defaultTo(knex.fn.now());
    table.integer('reportedCount').notNullable().defaultTo(0);
    table.integer('skippedCount').notNullable().defaultTo(0);
    table.integer('shownCount').notNullable().defaultTo(0);
    table.integer('namedCount').notNullable().defaultTo(0);
  })
  .createTable('namings', (table) => {
    table.increments('id').primary();
    table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updatedAt').notNullable().defaultTo(knex.fn.now());
    table.integer('personId').notNullable();
    table.integer('nameId').notNullable();
    table.string('userIdentifier').notNullable();
  })
  .createTable('names', (table) => {
    table.increments('id').primary();
    table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updatedAt').notNullable().defaultTo(knex.fn.now());
    table.string('name').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
