const db = require('../dbConfig.js');

module.exports = {
    findSeasonById: (id) => {
        return db('seasons').where('id', id).first();
    },

    findSeasonsByName: (name) => {
        return db('seasons').where('name', name).orderBy('id');
    },

    findSeasonsByUser: (user) => {
        return db('seasons').where('adminUserId', user.id).orderBy('id');
    },

    findAllSeasons: () => {
        return db('seasons');
    },

    insert: (season) => {
        return db('seasons').insert(season, 'id');
    },

    update: (id, changes) => {
        return db('seasons').where('id', id).update(changes);
    },

    remove: (id) => {
        return db('seasons').where('id', id).del();
    },
};