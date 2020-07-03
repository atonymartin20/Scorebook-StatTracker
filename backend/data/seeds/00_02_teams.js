exports.seed = function (knex) {
    return knex('teams').insert([
        {
            id: 1,
            teamName: 'Fighting Toads',
            seasonId: 1,
            wins: 0,
            losses: 0,
            ties: 0
        },
        {
            id: 2,
            teamName: 'Fighting Toads 2',
            seasonId: 2,
            wins: 1,
            losses: 1,
            ties: 1
        },
        {
            id: 3,
            teamName: 'Fighting Toads 3',
            seasonId: 3,
            wins: 2,
            losses: 2,
            ties: 2
        },
    ]);
};