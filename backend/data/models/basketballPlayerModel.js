const db = require('../dbConfig.js');

module.exports = {
    findPlayerById: (id) => {
        return db('basketball-players').where('id', id).first();
    },

    findPlayerByName: (player) => {
        return db('basketball-players').where('firstName', player.firstName).where('lastName', player.lastName).orderBy('id');
    },

    findAllPlayers: () => {
        return db('basketball-players').select( 'id', 'firstName', 'lastName');
    },

    insert: (player) => {
        return db('basketball-players').insert(player, 'id');
    },

    update: (id, changes) => {
        return db('basketball-players').where('id', id).update(changes);
    },

    remove: (id) => {
        return db('basketball-players').where('id', id).del();
    },
};