exports.up = function (knex, Promise) {
    return knex.schema.createTable('seasons', seasons => {  
        seasons.increments();
        seasons.string('name').notNullable();
        seasons.integer('adminUserId').unsigned().notNullable();
        seasons.integer('teamCount').defaultTo(0);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('seasons');
};
