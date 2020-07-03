const db = require('../dbConfig.js');

module.exports = {
    findById: (id) => {
        return db('players').where('id', id).first();
    },

    findByName: (firstName, lastName) => {
        return db('players').where('first_name', firstName, 'last_name', lastName).orderBy('id');
    },

    findAllPlayers: () => {
        return db('players').select('first_name', 'last_name', 'id');
    },

    insert: (player) => {
        return db('players').insert(player, 'id');
    },

    update: (uid, changes) => {
        return db('players').where('id', uid).update(changes);
    },

    remove: (id) => {
        return db('players').where('id', id).del();
    },
};