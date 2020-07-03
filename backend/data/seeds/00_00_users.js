const bcrypt = require('bcryptjs');

exports.seed = function (knex, Promise) {
    return knex('users').insert([
        {
            id: 1,
            email: 'testemail1@email.com',
            username: 'test1',
            password: bcrypt.hashSync('1234', 4),
            firstName: 'tester',
            lastName: 'one',
            phone: '1234567890',
            googleId: '',
        },
        {
            id: 2,
            email: 'testemail2@email.com',
            username: 'test2',
            password: bcrypt.hashSync('1234', 4),
            firstName: 'tester',
            lastName: 'two',
            phone: '1234567890',
            googleId: '',
        },
        {
            id: 3,
            email: 'testemail3@email.com',
            username: 'test3',
            password: bcrypt.hashSync('1234', 4),
            firstName: 'tester',
            lastName: 'three',
            phone: '1234567890',
            googleId: '',
        },
    ]);
};
