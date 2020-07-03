const db = require('../dbConfig.js');

module.exports = {
    findById: (id) => {
        return db('users').where('id', id).first();
    },

    findByUsername: (username) => {
        return db('users').where('username', username).first();
    },

    findByEmail: (email) => {
        return db('users').where('email', email).first();
    },

    findAllUsers: () => {
        return db('users').select('email', 'id');
    },

    insert: (user) => {
        return db('users').insert(user, 'id');
    },

    update: (uid, changes) => {
        return db('users').where('id', uid).update(changes);
    },
};