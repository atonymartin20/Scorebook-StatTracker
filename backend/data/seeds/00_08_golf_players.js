exports.seed = function (knex) {
  return knex('golf-players').insert([
      {
          id: 1,
          firstName: 'Player',
          lastName: '1',
          TournamentsEntered2019: 1,
          Rounds2019: 3,
          Holes2019: 50,
          Wins2019: 0
      },
      {
          id: 2,
          firstName: 'Player',
          lastName: '2',
          TournamentsEntered2019: 3,
          Rounds2019: 8,
          Holes2019: 120,
          Wins2019: 0
      },
      {
          id: 3,
          firstName: 'Player',
          lastName: '3',
          TournamentsEntered2019: 12,
          Rounds2019: 36,
          Holes2019: 300,
          Wins2019: 2
      },
  ]);
};
