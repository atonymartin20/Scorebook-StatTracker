exports.up = function (knex, Promise) {
    return knex.schema.createTable('players', players => {  
        players.increments();
        players.string('firstName', 50).defaultTo('');
        players.string('lastName', 50).defaultTo('');
        players.string('currentTeam', 80).defaultTo('');
        players.string('Spring2019Team', 80).defaultTo('');
        players.integer('Spring2019TeamId').unsigned().defaultTo(0);
        players.integer('Spring2019Games').unsigned().defaultTo(0);
        players.integer('Spring2019AtBats').unsigned().defaultTo(0);
        players.integer('Spring2019PlateAppearances').unsigned().defaultTo(0);
        players.integer('Spring2019Hits').unsigned().defaultTo(0);
        players.integer('Spring2019Singles').unsigned().defaultTo(0);
        players.integer('Spring2019Doubles').unsigned().defaultTo(0);
        players.integer('Spring2019Triples').unsigned().defaultTo(0);
        players.integer('Spring2019HomeRuns').unsigned().defaultTo(0);
        players.string('Spring2019BattingAverage', 5).defaultTo('');
        players.string('Spring2019OnBasePercentage', 5).defaultTo('');
        players.string('Spring2019SluggingPercentage', 5).defaultTo('');
        players.integer('Spring2019Runs').unsigned().defaultTo(0);
        players.integer('Spring2019RBIs').unsigned().defaultTo(0);
        players.integer('Spring2019StolenBases').unsigned().defaultTo(0);
        players.integer('Spring2019HitterStrikeouts').unsigned().defaultTo(0);
        players.integer('Spring2019HitterWalks').unsigned().defaultTo(0);
        players.integer('Spring2019Appearances').unsigned().defaultTo(0);
        players.string('Spring2019InningsPitched', 10).defaultTo('');
        players.integer('Spring2019EarnedRuns').unsigned().defaultTo(0);
        players.integer('Spring2019PitcherStrikeouts').unsigned().defaultTo(0);
        players.integer('Spring2019PitcherWalks').unsigned().defaultTo(0);
        players.integer('Spring2019HitsAllowed').unsigned().defaultTo(0);
        players.integer('Spring2019Wins').unsigned().defaultTo(0);
        players.integer('Spring2019Losses').unsigned().defaultTo(0);
        players.integer('Spring2019Saves').unsigned().defaultTo(0);
        players.string('Spring2019ERA', 10).defaultTo('');
        players.string('Spring2019WHIP', 10).defaultTo('');
        players.string('Summer2019Team', 80).defaultTo('');
        players.integer('Summer2019TeamId').unsigned().defaultTo(0);
        players.integer('Summer2019Games').unsigned().defaultTo(0);
        players.integer('Summer2019AtBats').unsigned().defaultTo(0);
        players.integer('Summer2019PlateAppearances').unsigned().defaultTo(0);
        players.integer('Summer2019Hits').unsigned().defaultTo(0);
        players.integer('Summer2019Singles').unsigned().defaultTo(0);
        players.integer('Summer2019Doubles').unsigned().defaultTo(0);
        players.integer('Summer2019Triples').unsigned().defaultTo(0);
        players.integer('Summer2019HomeRuns').unsigned().defaultTo(0);
        players.string('Summer2019BattingAverage', 5).defaultTo('');
        players.string('Summer2019OnBasePercentage', 5).defaultTo('');
        players.string('Summer2019SluggingPercentage', 5).defaultTo('');
        players.integer('Summer2019Runs').unsigned().defaultTo(0);
        players.integer('Summer2019RBIs').unsigned().defaultTo(0);
        players.integer('Summer2019StolenBases').unsigned().defaultTo(0);
        players.integer('Summer2019HitterStrikeouts').unsigned().defaultTo(0);
        players.integer('Summer2019HitterWalks').unsigned().defaultTo(0);
        players.integer('Summer2019Appearances').unsigned().defaultTo(0);
        players.string('Summer2019InningsPitched', 10).defaultTo('');
        players.integer('Summer2019EarnedRuns').unsigned().defaultTo(0);
        players.integer('Summer2019PitcherStrikeouts').unsigned().defaultTo(0);
        players.integer('Summer2019PitcherWalks').unsigned().defaultTo(0);
        players.integer('Summer2019HitsAllowed').unsigned().defaultTo(0);
        players.integer('Summer2019Wins').unsigned().defaultTo(0);
        players.integer('Summer2019Losses').unsigned().defaultTo(0);
        players.integer('Summer2019Saves').unsigned().defaultTo(0);
        players.string('Summer2019ERA', 10).defaultTo('');
        players.string('Summer2019WHIP', 10).defaultTo('');
        players.string('Fall2019Team', 80).defaultTo('');
        players.integer('Fall2019TeamId').unsigned().defaultTo(0);
        players.integer('Fall2019Games').unsigned().defaultTo(0);
        players.integer('Fall2019AtBats').unsigned().defaultTo(0);
        players.integer('Fall2019PlateAppearances').unsigned().defaultTo(0);
        players.integer('Fall2019Hits').unsigned().defaultTo(0);
        players.integer('Fall2019Singles').unsigned().defaultTo(0);
        players.integer('Fall2019Doubles').unsigned().defaultTo(0);
        players.integer('Fall2019Triples').unsigned().defaultTo(0);
        players.integer('Fall2019HomeRuns').unsigned().defaultTo(0);
        players.string('Fall2019BattingAverage', 5).defaultTo('');
        players.string('Fall2019OnBasePercentage',5).defaultTo('');
        players.string('Fall2019SluggingPercentage', 5).defaultTo('');
        players.integer('Fall2019Runs').unsigned().defaultTo(0);
        players.integer('Fall2019RBIs').unsigned().defaultTo(0);
        players.integer('Fall2019StolenBases').unsigned().defaultTo(0);
        players.integer('Fall2019HitterStrikeouts').unsigned().defaultTo(0);
        players.integer('Fall2019HitterWalks').unsigned().defaultTo(0);
        players.integer('Fall2019Appearances').unsigned().defaultTo(0);
        players.string('Fall2019InningsPitched', 10).defaultTo('');
        players.integer('Fall2019EarnedRuns').unsigned().defaultTo(0);
        players.integer('Fall2019PitcherStrikeouts').unsigned().defaultTo(0);
        players.integer('Fall2019PitcherWalks').unsigned().defaultTo(0);
        players.integer('Fall2019HitsAllowed').unsigned().defaultTo(0);
        players.integer('Fall2019Wins').unsigned().defaultTo(0);
        players.integer('Fall2019Losses').unsigned().defaultTo(0);
        players.integer('Fall2019Saves').unsigned().defaultTo(0);
        players.string('Fall2019ERA', 10).defaultTo('');
        players.string('Fall2019WHIP', 10).defaultTo('');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('players');
};