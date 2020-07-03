const db = require('../dbConfig.js');

module.exports = {
    findSeasonById: (id) => {
        return db('seasons').where('id', id).first();
    },

    findSeasonsByName: (name) => {
        return db('seasons').where('name', name).orderBy('id');
    },

    findSeasonsByUser: (user) => {
        return db('seasons').where('admin_user_id', user.id).orderBy('id');
    },

    insert: (season) => {
        return db('seasons').insert(season, 'id');
    },

    update: (uid, changes) => {
        return db('seasons').where('id', uid).update(changes);
    },

    remove: (id) => {
        return db('seasons').where('id', id).del();
    },
};