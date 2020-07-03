exports.seed = function (knex) {
    return knex('teams').insert([
        {
            id: 1,
            team_name: 'Fighting Toads',
            season_id: 1,
            wins: 0,
            losses: 0,
            ties: 0
        },
        {
            id: 2,
            team_name: 'Fighting Toads 2',
            season_id: 2,
            wins: 1,
            losses: 1,
            ties: 1
        },
        {
            id: 3,
            team_name: 'Fighting Toads 3',
            season_id: 3,
            wins: 2,
            losses: 2,
            ties: 2
        },
    ]);
};