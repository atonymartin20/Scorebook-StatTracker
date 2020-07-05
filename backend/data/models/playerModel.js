const db = require('../dbConfig.js');

module.exports = {
    findById: (id) => {
        return db('players').where('id', id).first();
    },

    findByName: (firstName, lastName) => {
        return db('players').where('firstName', firstName, 'lastName', lastName).orderBy('id');
    },

    findAllPlayers: () => {
        return db('players').select('firstName', 'lastName', 'id');
    },

    insert: (player) => {
        return db('players').insert(player, 'id');
    },

    update: (id, changes) => {
        return db('players').where('id', id).update(changes);
    },

    remove: (id) => {
        return db('players').where('id', id).del();
    },
};