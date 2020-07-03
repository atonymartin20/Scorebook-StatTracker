exports.seed = function (knex) {
    return knex('seasons').insert([
        {
            id: 1,
            name: 'Spring 2019 A League',
            adminUserId: 1,
        },
        {
            id: 2,
            name: 'Summer 2019 B League',
            adminUserId: 1,
        },
        {
            id: 3,
            name: 'Fall 2019 C League',
            adminUserId: 2,
        },
    ]);
};
