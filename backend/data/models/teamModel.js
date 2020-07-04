const db = require('../dbConfig.js');

module.exports = {
    findTeamById: (id) => {
        return db('teams').where('id', id).first();
    },

    findTeamsBySeason: (seasonId) => {
        return db('teams').where('season_id', seasonId).orderBy('id');
    },

    findTeamByName: (name) => {
        return db('teams').where('team_name', name).orderBy('id');
    },

    insert: (team) => {
        return db('teams').insert(team, 'id');
    },

    update: (id, team) => {
        return db('teams').where('id', id).update(team);
    },

    remove: (id) => {
        return db('teams').where('id', id).del();
    },
};