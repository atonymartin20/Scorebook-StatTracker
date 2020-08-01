exports.seed = function (knex) {
    return knex('seasons').insert([
        {
            id: 1,
            name: 'Spring 2019 A League',
            adminUserId: 1,
            teamCount: 4,
            gameCount: 6,
        },
        {
            id: 2,
            name: 'Summer 2019 B League',
            adminUserId: 1,
            teamCount: 6,
            gameCount: 6,
        },
        {
            id: 3,
            name: 'Fall 2019 C League',
            adminUserId: 2,
            teamCount: 8,
            gameCount: 6,
        },
    ]);
};
