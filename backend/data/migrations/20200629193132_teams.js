exports.up = function (knex, Promise) {
    return knex.schema.createTable('teams', teams => {  
        teams.increments();
        teams.string('teamName', 128).notNullable();
        teams.integer('seasonId').unsigned().notNullable();
        teams.integer('wins').unsigned().defaultTo(0);
        teams.integer('losses').unsigned().defaultTo(0);
        teams.integer('ties').unsigned().defaultTo(0);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('teams');
};
