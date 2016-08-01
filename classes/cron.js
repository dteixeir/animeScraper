// cron cannot go less that 1 minute task run times.
var cron = require('node-cron');
var nwAnimeScraper = require('../scrapers/index.js').nwAnime;

var schedualTasks = function(){};

// Will scrap for anime
cron.schedule('* * * * *', function() {
    // app.scrapers.nwAnime.scrape(app.models.anime, app.models.animeEpisode);
    console.log('will execute every minute until stopped');
});

// Should run new update every day @ 00:00
cron.schedule('0 0 * * *', function() {
    console.log('Update New Fields');
    //update animes
        // relay to update function

    //update episodes
        // relay to update function
});

// Does not need to export back.