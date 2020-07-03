exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', users => {  
        users.increments();
        users.string('email, 128').notNullable().unique();
        users.string('username', 128).unique();
        users.string('password', 128);
        users.string('firstName', 128);
        users.string('lastName', 128);
        users.string('phone', 128);
        users.string('googleId', 128);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};