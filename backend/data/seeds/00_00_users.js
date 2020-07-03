const bcrypt = require('bcryptjs');

exports.seed = function (knex, Promise) {
    return knex('users').insert([
        {
            id: 1,
            email: 'testemail1@email.com',
            username: 'test1',
            password: bcrypt.hashSync('1234', 4),
            first_name: 'tester',
            last_name: 'one',
            phone: '1234567890',
            google_id: '',
        },
        {
            id: 2,
            email: 'testemail2@email.com',
            username: 'test2',
            password: bcrypt.hashSync('1234', 4),
            first_name: 'tester',
            last_name: 'two',
            phone: '1234567890',
            google_id: '',
        },
        {
            id: 3,
            email: 'testemail3@email.com',
            username: 'test3',
            password: bcrypt.hashSync('1234', 4),
            first_name: 'tester',
            last_name: 'three',
            phone: '1234567890',
            google_id: '',
        },
    ]);
};
