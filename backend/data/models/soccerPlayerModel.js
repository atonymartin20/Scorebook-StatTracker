const db = require('../dbConfig.js');

module.exports = {
    findPlayerById: (id) => {
        return db('soccer-players').where('id', id).first();
    },

    findPlayerByName: (player) => {
        return db('soccer-players').where('firstName', player.firstName).where('lastName', player.lastName).orderBy('id');
    },

    findAllPlayers: () => {
        return db('soccer-players').select( 'id', 'firstName', 'lastName');
    },

    insert: (player) => {
        return db('soccer-players').insert(player, 'id');
    },

    update: (id, changes) => {
        return db('soccer-players').where('id', id).update(changes);
    },

    remove: (id) => {
        return db('soccer-players').where('id', id).del();
    },
};