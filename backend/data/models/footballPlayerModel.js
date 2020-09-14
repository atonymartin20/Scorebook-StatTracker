const db = require('../dbConfig.js');

module.exports = {
    findPlayerById: (id) => {
        return db('football-players').where('id', id).first();
    },

    findPlayerByName: (player) => {
        return db('football-players').where('firstName', player.firstName).where('lastName', player.lastName).orderBy('id');
    },

    findAllPlayers: () => {
        return db('football-players').select( 'id', 'firstName', 'lastName');
    },

    insert: (player) => {
        return db('football-players').insert(player, 'id');
    },

    update: (id, changes) => {
        return db('football-players').where('id', id).update(changes);
    },

    remove: (id) => {
        return db('football-players').where('id', id).del();
    },
};