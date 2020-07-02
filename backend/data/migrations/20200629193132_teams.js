exports.up = function (knex, Promise) {
    return knex.schema.createTable('teams', teams => {  
        teams.increments();
        teams.string('team_name', 128).notNullable();
        teams.integer('league_id').unsigned().notNullable();
        teams.integer('wins').unsigned().defaultTo(0);
        teams.integer('losses').unsigned().defaultTo(0);
        teams.integer('ties').unsigned().defaultTo(0);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('teams');
};
