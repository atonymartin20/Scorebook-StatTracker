exports.up = function (knex, Promise) {
    return knex.schema.createTable('racing-drivers', players => {  
        players.increments();
        players.string('firstName', 50).defaultTo('');
        players.string('lastName', 50).defaultTo('');
        players.string('SeriesOne2019SeriesName').defaultTo('');
        players.integer('SeriesOne2019Races').unsigned().defaultTo(0);
        players.integer('SeriesOne2019RacesFinished').unsigned().defaultTo(0);
        players.integer('SeriesOne2019Points').unsigned().defaultTo(0);
        players.integer('SeriesOne2019LapsLed').unsigned().defaultTo(0);
        players.integer('SeriesOne2019StartingPosition').unsigned().defaultTo(0);
        players.integer('SeriesOne2019FinishingPosition').unsigned().defaultTo(0);
        players.integer('SeriesOne2019Poles').unsigned().defaultTo(0);
        players.integer('SeriesOne2019Wins').unsigned().defaultTo(0);
        players.integer('SeriesOne2019Top3Finishes').unsigned().defaultTo(0);
        players.integer('SeriesOne2019Top5Finishes').unsigned().defaultTo(0);
        players.integer('SeriesOne2019Top10Finishes').unsigned().defaultTo(0);
        players.string('SeriesTwo2019SeriesName').defaultTo('');
        players.integer('SeriesTwo2019Races').unsigned().defaultTo(0);
        players.integer('SeriesTwo2019RacesFinished').unsigned().defaultTo(0);
        players.integer('SeriesTwo2019Points').unsigned().defaultTo(0);
        players.integer('SeriesTwo2019LapsLed').unsigned().defaultTo(0);
        players.integer('SeriesTwo2019StartingPosition').unsigned().defaultTo(0);
        players.integer('SeriesTwo2019FinishingPosition').unsigned().defaultTo(0);
        players.integer('SeriesTwo2019Poles').unsigned().defaultTo(0);
        players.integer('SeriesTwo2019Wins').unsigned().defaultTo(0);
        players.integer('SeriesTwo2019Top3Finishes').unsigned().defaultTo(0);
        players.integer('SeriesTwo2019Top5Finishes').unsigned().defaultTo(0);
        players.integer('SeriesTwo2019Top10Finishes').unsigned().defaultTo(0);
        players.string('SeriesThree2019SeriesName').defaultTo('');
        players.integer('SeriesThree2019Races').unsigned().defaultTo(0);
        players.integer('SeriesThree2019RacesFinished').unsigned().defaultTo(0);
        players.integer('SeriesThree2019Points').unsigned().defaultTo(0);
        players.integer('SeriesThree2019LapsLed').unsigned().defaultTo(0);
        players.integer('SeriesThree2019StartingPosition').unsigned().defaultTo(0);
        players.integer('SeriesThree2019FinishingPosition').unsigned().defaultTo(0);
        players.integer('SeriesThree2019Poles').unsigned().defaultTo(0);
        players.integer('SeriesThree2019Wins').unsigned().defaultTo(0);
        players.integer('SeriesThree2019Top3Finishes').unsigned().defaultTo(0);
        players.integer('SeriesThree2019Top5Finishes').unsigned().defaultTo(0);
        players.integer('SeriesThree2019Top10Finishes').unsigned().defaultTo(0);
        players.string('SeriesFour2019SeriesName').defaultTo('');
        players.integer('SeriesFour2019Races').unsigned().defaultTo(0);
        players.integer('SeriesFour2019RacesFinished').unsigned().defaultTo(0);
        players.integer('SeriesFour2019Points').unsigned().defaultTo(0);
        players.integer('SeriesFour2019LapsLed').unsigned().defaultTo(0);
        players.integer('SeriesFour2019StartingPosition').unsigned().defaultTo(0);
        players.integer('SeriesFour2019FinishingPosition').unsigned().defaultTo(0);
        players.integer('SeriesFour2019Poles').unsigned().defaultTo(0);
        players.integer('SeriesFour2019Wins').unsigned().defaultTo(0);
        players.integer('SeriesFour2019Top3Finishes').unsigned().defaultTo(0);
        players.integer('SeriesFour2019Top5Finishes').unsigned().defaultTo(0);
        players.integer('SeriesFour2019Top10Finishes').unsigned().defaultTo(0);
        players.string('SeriesFive2019SeriesName').defaultTo('');
        players.integer('SeriesFive2019Races').unsigned().defaultTo(0);
        players.integer('SeriesFive2019RacesFinished').unsigned().defaultTo(0);
        players.integer('SeriesFive2019Points').unsigned().defaultTo(0);
        players.integer('SeriesFive2019LapsLed').unsigned().defaultTo(0);
        players.integer('SeriesFive2019StartingPosition').unsigned().defaultTo(0);
        players.integer('SeriesFive2019FinishingPosition').unsigned().defaultTo(0);
        players.integer('SeriesFive2019Poles').unsigned().defaultTo(0);
        players.integer('SeriesFive2019Wins').unsigned().defaultTo(0);
        players.integer('SeriesFive2019Top3Finishes').unsigned().defaultTo(0);
        players.integer('SeriesFive2019Top5Finishes').unsigned().defaultTo(0);
        players.integer('SeriesFive2019Top10Finishes').unsigned().defaultTo(0);
        players.string('SeriesOne2020SeriesName').defaultTo('');
        players.integer('SeriesOne2020Races').unsigned().defaultTo(0);
        players.integer('SeriesOne2020RacesFinished').unsigned().defaultTo(0);
        players.integer('SeriesOne2020Points').unsigned().defaultTo(0);
        players.integer('SeriesOne2020LapsLed').unsigned().defaultTo(0);
        players.integer('SeriesOne2020StartingPosition').unsigned().defaultTo(0);
        players.integer('SeriesOne2020FinishingPosition').unsigned().defaultTo(0);
        players.integer('SeriesOne2020Poles').unsigned().defaultTo(0);
        players.integer('SeriesOne2020Wins').unsigned().defaultTo(0);
        players.integer('SeriesOne2020Top3Finishes').unsigned().defaultTo(0);
        players.integer('SeriesOne2020Top5Finishes').unsigned().defaultTo(0);
        players.integer('SeriesOne2020Top10Finishes').unsigned().defaultTo(0);
        players.string('SeriesTwo2020SeriesName').defaultTo('');
        players.integer('SeriesTwo2020Races').unsigned().defaultTo(0);
        players.integer('SeriesTwo2020RacesFinished').unsigned().defaultTo(0);
        players.integer('SeriesTwo2020Points').unsigned().defaultTo(0);
        players.integer('SeriesTwo2020LapsLed').unsigned().defaultTo(0);
        players.integer('SeriesTwo2020StartingPosition').unsigned().defaultTo(0);
        players.integer('SeriesTwo2020FinishingPosition').unsigned().defaultTo(0);
        players.integer('SeriesTwo2020Poles').unsigned().defaultTo(0);
        players.integer('SeriesTwo2020Wins').unsigned().defaultTo(0);
        players.integer('SeriesTwo2020Top3Finishes').unsigned().defaultTo(0);
        players.integer('SeriesTwo2020Top5Finishes').unsigned().defaultTo(0);
        players.integer('SeriesTwo2020Top10Finishes').unsigned().defaultTo(0);
        players.string('SeriesThree2020SeriesName').defaultTo('');
        players.integer('SeriesThree2020Races').unsigned().defaultTo(0);
        players.integer('SeriesThree2020RacesFinished').unsigned().defaultTo(0);
        players.integer('SeriesThree2020Points').unsigned().defaultTo(0);
        players.integer('SeriesThree2020LapsLed').unsigned().defaultTo(0);
        players.integer('SeriesThree2020StartingPosition').unsigned().defaultTo(0);
        players.integer('SeriesThree2020FinishingPosition').unsigned().defaultTo(0);
        players.integer('SeriesThree2020Poles').unsigned().defaultTo(0);
        players.integer('SeriesThree2020Wins').unsigned().defaultTo(0);
        players.integer('SeriesThree2020Top3Finishes').unsigned().defaultTo(0);
        players.integer('SeriesThree2020Top5Finishes').unsigned().defaultTo(0);
        players.integer('SeriesThree2020Top10Finishes').unsigned().defaultTo(0);
        players.string('SeriesFour2020SeriesName').defaultTo('');
        players.integer('SeriesFour2020Races').unsigned().defaultTo(0);
        players.integer('SeriesFour2020RacesFinished').unsigned().defaultTo(0);
        players.integer('SeriesFour2020Points').unsigned().defaultTo(0);
        players.integer('SeriesFour2020LapsLed').unsigned().defaultTo(0);
        players.integer('SeriesFour2020StartingPosition').unsigned().defaultTo(0);
        players.integer('SeriesFour2020FinishingPosition').unsigned().defaultTo(0);
        players.integer('SeriesFour2020Poles').unsigned().defaultTo(0);
        players.integer('SeriesFour2020Wins').unsigned().defaultTo(0);
        players.integer('SeriesFour2020Top3Finishes').unsigned().defaultTo(0);
        players.integer('SeriesFour2020Top5Finishes').unsigned().defaultTo(0);
        players.integer('SeriesFour2020Top10Finishes').unsigned().defaultTo(0);
        players.string('SeriesFive2020SeriesName').defaultTo('');
        players.integer('SeriesFive2020Races').unsigned().defaultTo(0);
        players.integer('SeriesFive2020RacesFinished').unsigned().defaultTo(0);
        players.integer('SeriesFive2020Points').unsigned().defaultTo(0);
        players.integer('SeriesFive2020LapsLed').unsigned().defaultTo(0);
        players.integer('SeriesFive2020StartingPosition').unsigned().defaultTo(0);
        players.integer('SeriesFive2020FinishingPosition').unsigned().defaultTo(0);
        players.integer('SeriesFive2020Poles').unsigned().defaultTo(0);
        players.integer('SeriesFive2020Wins').unsigned().defaultTo(0);
        players.integer('SeriesFive2020Top3Finishes').unsigned().defaultTo(0);
        players.integer('SeriesFive2020Top5Finishes').unsigned().defaultTo(0);
        players.integer('SeriesFive2020Top10Finishes').unsigned().defaultTo(0);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('racing-drivers');
};
