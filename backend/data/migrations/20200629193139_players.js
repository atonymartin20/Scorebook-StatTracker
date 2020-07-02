exports.up = function (knex, Promise) {
    return knex.schema.createTable('players', players => {  
        players.increments();
        players.string('firstName', 50);
        players.string('lastName', 50);
        players.string('currentTeam', 80);
        players.string('Spring2019Team', 80);
        players.integer('Spring2019Games');
        players.integer('Spring2019AtBats');
        players.integer('Spring2019PlateAppearances');
        players.integer('Spring2019Hits');
        players.string('Spring2019BattingAverage', 5);
        players.string('Spring2019OnBasePercentage', 5);
        players.string('Spring2019SluggingPercentage', 5);
        players.integer('Spring2019HomeRuns');
        players.integer('Spring2019Runs');
        players.integer('Spring2019RBIs');
        players.integer('Spring2019StolenBases');
        players.integer('Spring2019HitterStrikeouts');
        players.integer('Spring2019HitterWalks');
        players.integer('Spring2019Appearances');
        players.string('Spring2019InningsPitched', 10);
        players.integer('Spring2019EarnedRuns');
        players.integer('Spring2019PitcherStrikeouts');
        players.integer('Spring2019PitcherWalks');
        players.integer('Spring2019HitsAllowed');
        players.integer('Spring2019Wins');
        players.integer('Spring2019Losses');
        players.integer('Spring2019Saves');
        players.string('Spring2019ERA', 10);
        players.string('Spring2019WHIP', 10);
        players.string('Summer2019Team', 80);
        players.integer('Summer2019Games');
        players.integer('Summer2019AtBats');
        players.integer('Summer2019PlateAppearances');
        players.integer('Summer2019Hits');
        players.string('Summer2019BattingAverage', 5);
        players.string('Summer2019OnBasePercentage', 5);
        players.string('Summer2019SluggingPercentage', 5);
        players.integer('Summer2019HomeRuns');
        players.integer('Summer2019Runs');
        players.integer('Summer2019RBIs');
        players.integer('Summer2019StolenBases');
        players.integer('Summer2019HitterStrikeouts');
        players.integer('Summer2019HitterWalks');
        players.integer('Summer2019Appearances');
        players.string('Summer2019InningsPitched', 10);
        players.integer('Summer2019EarnedRuns');
        players.integer('Summer2019PitcherStrikeouts');
        players.integer('Summer2019PitcherWalks');
        players.integer('Summer2019HitsAllowed');
        players.integer('Summer2019Wins');
        players.integer('Summer2019Losses');
        players.integer('Summer2019Saves');
        players.string('Summer2019ERA', 10);
        players.string('Summer2019WHIP', 10);
        players.string('Fall2019Team', 80);
        players.integer('Fall2019Games');
        players.integer('Fall2019AtBats');
        players.integer('Fall2019PlateAppearances');
        players.integer('Fall2019Hits');
        players.string('Fall2019BattingAverage', 5);
        players.string('Fall2019OnBasePercentage',5);
        players.string('Fall2019SluggingPercentage', 5);
        players.integer('Fall2019HomeRuns');
        players.integer('Fall2019Runs');
        players.integer('Fall2019RBIs');
        players.integer('Fall2019StolenBases');
        players.integer('Fall2019HitterStrikeouts');
        players.integer('Fall2019HitterWalks');
        players.integer('Fall2019Appearances');
        players.string('Fall2019InningsPitched', 10);
        players.integer('Fall2019EarnedRuns');
        players.integer('Fall2019PitcherStrikeouts');
        players.integer('Fall2019PitcherWalks');
        players.integer('Fall2019HitsAllowed');
        players.integer('Fall2019Wins');
        players.integer('Fall2019Losses');
        players.integer('Fall2019Saves');
        players.string('Fall2019ERA', 10);
        players.string('Fall2019WHIP', 10);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('players');
};
