const db = require('../dbConfig.js');

module.exports = {
    findPlayerById: (id) => {
        return db('hockey-players').where('id', id).first();
    },

    findPlayerByName: (player) => {
        return db('hockey-players').where('firstName', player.firstName).where('lastName', player.lastName).orderBy('id');
    },

    findAllPlayers: () => {
        return db('hockey-players').select( 'id', 'firstName', 'lastName');
    },

    insert: (player) => {
        return db('hockey-players').insert(player, 'id');
    },

    update: (id, changes) => {
        return db('hockey-players').where('id', id).update(changes);
    },

    remove: (id) => {
        return db('hockey-players').where('id', id).del();
    },
};