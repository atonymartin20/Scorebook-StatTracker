const db = require('../dbConfig.js');

module.exports = {
    findPlayerById: (id) => {
        return db('players').where('id', id).first();
    },

    findPlayerByName: (player) => {
        return db('players').where('firstName', player.firstName).where('lastName', player.lastName).orderBy('id');
    },

    findAllPlayers: () => {
        return db('players').select( 'id', 'firstName', 'lastName');
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