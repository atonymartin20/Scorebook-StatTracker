const db = require('../dbConfig.js');

module.exports = {
    findTeamById: (id) => {
        return db('teams').where('id', id).first();
    },

    findTeamsBySeason: (seasonId) => {
        return db('teams').where('seasonId', seasonId).orderBy('id');
    },

    findTeamByName: (name) => {
        return db('teams').where('teamName', name).orderBy('id');
    },

    findAllTeams: () => {
        return db('teams');
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