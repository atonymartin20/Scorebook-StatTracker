const db = require('../dbConfig.js');

module.exports = {
    findUserById: (id) => {
        return db('users').where('id', id).first();
    },

    findUserByUsername: (username) => {
        return db('users').where('username', username).first();
    },

    findUserByEmail: (email) => {
        return db('users').where('email', email).first();
    },

    findAllUsers: () => {
        return db('users').select('id', 'email');
    },

    insert: (user) => {
        return db('users').insert(user, 'id');
    },

    update: (uid, changes) => {
        return db('users').where('id', uid).update(changes);
    },
};