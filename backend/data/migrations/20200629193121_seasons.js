exports.up = function (knex, Promise) {
    return knex.schema.createTable('seasons', seasons => {  
        seasons.increments();
        seasons.string('name').notNullable().unique();
        seasons.integer('admin_user_id').unsigned().notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('seasons');
};
