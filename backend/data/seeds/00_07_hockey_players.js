exports.seed = function (knex) {
  return knex('hockey-players').insert([
      {
          id: 1,
          firstName: 'Player',
          lastName: '1',
          currentTeam: 'Fighting Toads',
          SeasonOne2019Team: 'Fighting Toads',
          SeasonOne2019TeamId: 1,
          SeasonOne2019Games: 1,
      },
      {
          id: 2,
          firstName: 'Player',
          lastName: '2',
          currentTeam: 'Fighting Toads 2',
          SeasonTwo2019Team: 'Fighting Toads 2',
          SeasonTwo2019TeamId: 2,
          SeasonOne2019Games: 2,
      },
      {
          id: 3,
          firstName: 'Player',
          lastName: '3',
          currentTeam: 'Fighting Toads 3',
          SeasonThree2019Team: 'Fighting Toads 3',
          SeasonThree2019TeamId: 3,
          SeasonThree2019Games: 3,
      },
  ]);
};
