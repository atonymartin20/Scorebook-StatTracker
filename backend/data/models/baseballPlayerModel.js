const db = require('../dbConfig.js');

module.exports = {
    findPlayerById: (id) => {
        return db('baseball-players').where('id', id).first();
    },

    findPlayerByName: (player) => {
        return db('baseball-players').where('firstName', player.firstName).where('lastName', player.lastName).orderBy('id');
    },

    findAllPlayers: () => {
        return db('baseball-players').select( 'id', 'firstName', 'lastName');
    },

    insert: (player) => {
        return db('baseball-players').insert(player, 'id');
    },

    update: (id, changes) => {
        return db('baseball-players').where('id', id).update(changes);
    },

    remove: (id) => {
        return db('baseball-players').where('id', id).del();
    },
};