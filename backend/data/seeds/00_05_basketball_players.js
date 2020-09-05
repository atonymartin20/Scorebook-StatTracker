exports.seed = function (knex) {
  return knex('basketball-players').insert([
      {
          id: 1,
          firstName: 'Player',
          lastName: '1',
          currentTeam: 'Fighting Toads',
          Spring2019Team: 'Fighting Toads',
          Spring2019TeamId: 1,
          Spring2019Games: 1,
      },
      {
          id: 2,
          firstName: 'Player',
          lastName: '2',
          currentTeam: 'Fighting Toads 2',
          Summer2019Team: 'Fighting Toads 2',
          Summer2019TeamId: 2,
          Spring2019Games: 2,
      },
      {
          id: 3,
          firstName: 'Player',
          lastName: '3',
          currentTeam: 'Fighting Toads 3',
          Fall2019Team: 'Fighting Toads 3',
          Fall2019TeamId: 3,
          Fall2019Games: 3,
      },
  ]);
};
