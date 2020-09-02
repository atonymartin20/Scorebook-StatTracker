exports.up = function (knex, Promise) {
    return knex.schema.createTable('soccer-players', players => {  
        players.increments();
        players.string('firstName', 50).defaultTo('');
        players.string('lastName', 50).defaultTo('');
        players.string('currentTeam', 80).defaultTo('');
        players.string('primaryPosition').defaultTo('');
        players.string('Spring2019Team', 80).defaultTo('');
        players.integer('Spring2019TeamId').unsigned().defaultTo(0);
        players.string('Spring2019PrimaryPosition').defaultTo('');
        players.integer('Spring2019Games').unsigned().defaultTo(0);
        players.integer('Spring2019Starts').unsigned().defaultTo(0);
        players.integer('Spring2019MinutesPlayed').unsigned().defaultTo(0);
        players.integer('Spring2019ShotsOnGoalOffense').unsigned().defaultTo(0);
        players.integer('Spring2019Goals').unsigned().defaultTo(0);
        players.integer('Spring2019Assists').unsigned().defaultTo(0);
        players.integer('Spring2019PenaltyKicksAttempts').unsigned().defaultTo(0);
        players.integer('Spring2019PenaltyKicksMade').unsigned().defaultTo(0);
        players.integer('Spring2019ShotsOnGoalGoalie').unsigned().defaultTo(0);
        players.integer('Spring2019Saves').unsigned().defaultTo(0);
        players.integer('Spring2019GoalsAgainst').unsigned().defaultTo(0);
        players.integer('Spring2019YellowCards').unsigned().defaultTo(0);
        players.integer('Spring2019RedCards').unsigned().defaultTo(0);
        players.string('Summer2019Team', 80).defaultTo('');
        players.integer('Summer2019TeamId').unsigned().defaultTo(0);
        players.string('Summer2019PrimaryPosition').defaultTo('');
        players.integer('Summer2019Games').unsigned().defaultTo(0);
        players.integer('Summer2019Starts').unsigned().defaultTo(0);
        players.integer('Summer2019MinutesPlayed').unsigned().defaultTo(0);
        players.integer('Summer2019ShotsOnGoalOffense').unsigned().defaultTo(0);
        players.integer('Summer2019Goals').unsigned().defaultTo(0);
        players.integer('Summer2019Assists').unsigned().defaultTo(0);
        players.integer('Summer2019PenaltyKicksAttempts').unsigned().defaultTo(0);
        players.integer('Summer2019PenaltyKicksMade').unsigned().defaultTo(0);
        players.integer('Summer2019ShotsOnGoalGoalie').unsigned().defaultTo(0);
        players.integer('Summer2019Saves').unsigned().defaultTo(0);
        players.integer('Summer2019GoalsAgainst').unsigned().defaultTo(0);
        players.integer('Summer2019YellowCards').unsigned().defaultTo(0);
        players.integer('Summer2019RedCards').unsigned().defaultTo(0);
        players.string('Fall2019Team', 80).defaultTo('');
        players.integer('Fall2019TeamId').unsigned().defaultTo(0);
        players.string('Fall2019PrimaryPosition').defaultTo('');
        players.integer('Fall2019Games').unsigned().defaultTo(0);
        players.integer('Fall2019Starts').unsigned().defaultTo(0);
        players.integer('Fall2019MinutesPlayed').unsigned().defaultTo(0);
        players.integer('Fall2019ShotsOnGoalOffense').unsigned().defaultTo(0);
        players.integer('Fall2019Goals').unsigned().defaultTo(0);
        players.integer('Fall2019Assists').unsigned().defaultTo(0);
        players.integer('Fall2019PenaltyKicksAttempts').unsigned().defaultTo(0);
        players.integer('Fall2019PenaltyKicksMade').unsigned().defaultTo(0);
        players.integer('Fall2019ShotsOnGoalGoalie').unsigned().defaultTo(0);
        players.integer('Fall2019Saves').unsigned().defaultTo(0);
        players.integer('Fall2019GoalsAgainst').unsigned().defaultTo(0);
        players.integer('Fall2019YellowCards').unsigned().defaultTo(0);
        players.integer('Fall2019RedCards').unsigned().defaultTo(0);
        players.string('Spring2020Team', 80).defaultTo('');
        players.integer('Spring2020TeamId').unsigned().defaultTo(0);
        players.string('Spring2020PrimaryPosition').defaultTo('');
        players.integer('Spring2020Games').unsigned().defaultTo(0);
        players.integer('Spring2020Starts').unsigned().defaultTo(0);
        players.integer('Spring2020MinutesPlayed').unsigned().defaultTo(0);
        players.integer('Spring2020ShotsOnGoalOffense').unsigned().defaultTo(0);
        players.integer('Spring2020Goals').unsigned().defaultTo(0);
        players.integer('Spring2020Assists').unsigned().defaultTo(0);
        players.integer('Spring2020PenaltyKicksAttempts').unsigned().defaultTo(0);
        players.integer('Spring2020PenaltyKicksMade').unsigned().defaultTo(0);
        players.integer('Spring2020ShotsOnGoalGoalie').unsigned().defaultTo(0);
        players.integer('Spring2020Saves').unsigned().defaultTo(0);
        players.integer('Spring2020GoalsAgainst').unsigned().defaultTo(0);
        players.integer('Spring2020YellowCards').unsigned().defaultTo(0);
        players.integer('Spring2020RedCards').unsigned().defaultTo(0);
        players.string('Summer2020Team', 80).defaultTo('');
        players.integer('Summer2020TeamId').unsigned().defaultTo(0);
        players.string('Summer2020PrimaryPosition').defaultTo('');
        players.integer('Summer2020Games').unsigned().defaultTo(0);
        players.integer('Summer2020Starts').unsigned().defaultTo(0);
        players.integer('Summer2020MinutesPlayed').unsigned().defaultTo(0);
        players.integer('Summer2020ShotsOnGoalOffense').unsigned().defaultTo(0);
        players.integer('Summer2020Goals').unsigned().defaultTo(0);
        players.integer('Summer2020Assists').unsigned().defaultTo(0);
        players.integer('Summer2020PenaltyKicksAttempts').unsigned().defaultTo(0);
        players.integer('Summer2020PenaltyKicksMade').unsigned().defaultTo(0);
        players.integer('Summer2020ShotsOnGoalGoalie').unsigned().defaultTo(0);
        players.integer('Summer2020Saves').unsigned().defaultTo(0);
        players.integer('Summer2020GoalsAgainst').unsigned().defaultTo(0);
        players.integer('Summer2020YellowCards').unsigned().defaultTo(0);
        players.integer('Summer2020RedCards').unsigned().defaultTo(0);
        players.string('Fall2020Team', 80).defaultTo('');
        players.integer('Fall2020TeamId').unsigned().defaultTo(0);
        players.string('Fall2020PrimaryPosition').defaultTo('');
        players.integer('Fall2020Games').unsigned().defaultTo(0);
        players.integer('Fall2020Starts').unsigned().defaultTo(0);
        players.integer('Fall2020MinutesPlayed').unsigned().defaultTo(0);
        players.integer('Fall2020ShotsOnGoalOffense').unsigned().defaultTo(0);
        players.integer('Fall2020Goals').unsigned().defaultTo(0);
        players.integer('Fall2020Assists').unsigned().defaultTo(0);
        players.integer('Fall2020PenaltyKicksAttempts').unsigned().defaultTo(0);
        players.integer('Fall2020PenaltyKicksMade').unsigned().defaultTo(0);
        players.integer('Fall2020ShotsOnGoalGoalie').unsigned().defaultTo(0);
        players.integer('Fall2020Saves').unsigned().defaultTo(0);
        players.integer('Fall2020GoalsAgainst').unsigned().defaultTo(0);
        players.integer('Fall2020YellowCards').unsigned().defaultTo(0);
        players.integer('Fall2020RedCards').unsigned().defaultTo(0);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('soccer-players');
};
