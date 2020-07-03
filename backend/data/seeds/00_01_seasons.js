exports.seed = function (knex) {
    return knex('seasons').insert([
        {
            id: 1,
            name: 'Spring 2019 A League',
            admin_user_id: 1,
        },
        {
            id: 2,
            name: 'Summer 2019 B League',
            admin_user_id: 1,
        },
        {
            id: 3,
            name: 'Fall 2019 C League',
            admin_user_id: 2,
        },
    ]);
};
