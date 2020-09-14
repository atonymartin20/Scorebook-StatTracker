exports.up = function (knex, Promise) {
    return knex.schema.createTable('seasons', seasons => {  
        seasons.increments();
        seasons.string('name').notNullable();
        seasons.integer('adminUserId').unsigned().notNullable();
        seasons.integer('teamCount').unsigned().defaultTo(0);
        seasons.integer('gameCount').unsigned().defaultTo(0);
        seasons.string('sport').defaultTo('');
        seasons.integer('year').unsigned().defaultTo(2020);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('seasons');
};
