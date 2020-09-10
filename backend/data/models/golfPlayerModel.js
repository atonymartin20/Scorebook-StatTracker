const db = require('../dbConfig.js');

module.exports = {
    findPlayerById: (id) => {
        return db('golf-players').where('id', id).first();
    },

    findPlayerByName: (player) => {
        return db('golf-players').where('firstName', player.firstName).where('lastName', player.lastName).orderBy('id');
    },

    findAllPlayers: () => {
        return db('golf-players').select( 'id', 'firstName', 'lastName');
    },

    insert: (player) => {
        return db('golf-players').insert(player, 'id');
    },

    update: (id, changes) => {
        return db('golf-players').where('id', id).update(changes);
    },

    remove: (id) => {
        return db('golf-players').where('id', id).del();
    },
};