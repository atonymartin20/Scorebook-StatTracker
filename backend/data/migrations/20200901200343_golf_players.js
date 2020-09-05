exports.up = function (knex, Promise) {
    return knex.schema.createTable('golf-players', players => {  
        players.increments();
        players.string('firstName', 50).defaultTo('');
        players.string('lastName', 50).defaultTo('');
        players.integer('TournamentsEntered2019').unsigned().defaultTo(0);
        players.integer('Rounds2019').unsigned().defaultTo(0);
        players.integer('Holes2019').unsigned().defaultTo(0);
        players.integer('Eagles2019').unsigned().defaultTo(0);
        players.integer('Birdies2019').unsigned().defaultTo(0);
        players.integer('Pars2019').unsigned().defaultTo(0);
        players.integer('Bogeys2019').unsigned().defaultTo(0);
        players.integer('DoubleBogeys2019').unsigned().defaultTo(0);
        players.integer('TotalScore2019').unsigned().defaultTo(0);
        players.integer('OverUnderPar2019').unsigned().defaultTo(0);
        players.integer('CutsMade2019').unsigned().defaultTo(0);
        players.integer('Wins2019').unsigned().defaultTo(0);
        players.integer('Top5Finishes2019').unsigned().defaultTo(0);
        players.integer('Top10Finishes2019').unsigned().defaultTo(0);
        players.integer('TournamentsEntered2020').unsigned().defaultTo(0);
        players.integer('Rounds2020').unsigned().defaultTo(0);
        players.integer('Holes2020').unsigned().defaultTo(0);
        players.integer('Eagles2020').unsigned().defaultTo(0);
        players.integer('Birdies2020').unsigned().defaultTo(0);
        players.integer('Pars2020').unsigned().defaultTo(0);
        players.integer('Bogeys2020').unsigned().defaultTo(0);
        players.integer('DoubleBogeys2020').unsigned().defaultTo(0);
        players.integer('TotalScore2020').unsigned().defaultTo(0);
        players.integer('OverUnderPar2020').unsigned().defaultTo(0);
        players.integer('CutsMade2020').unsigned().defaultTo(0);
        players.integer('Wins2020').unsigned().defaultTo(0);
        players.integer('Top5Finishes2020').unsigned().defaultTo(0);
        players.integer('Top10Finishes2020').unsigned().defaultTo(0);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('golf-players');
};
