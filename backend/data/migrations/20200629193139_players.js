exports.up = function (knex, Promise) {
    return knex.schema.createTable('players', players => {  
        players.increments();
        players.string('firstName', 50);
        players.string('lastName', 50);
        players.integer('')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('players');
};
