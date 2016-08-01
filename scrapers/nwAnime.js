var nwAnime = function () {};
var request = require("request");
var cheerio = require("cheerio");
var animeFunctions = require("../classes/animes.js");

nwAnime.prototype.scrape = function (anime, animeEpisode) {
    // grab list of anime titles and cross reference?

    // web scraping magic!
    url = 'http://www.nwanime.com/';

    // structure of request call
    // first param = url, 
    // callback takes 3 params (error, response status code, html)
    request(url, function(error, response, html) {
        if(!error) {
            var $ = cheerio.load(html);

            var title, episodeNum;
            var showData = {title: '', episodeNum: '', href: ''};

            // sellect by attribute
            $('.moduleEntryThumb-link').filter(function() {
                var data = $(this);

                // Get show/episode# info
                showData.title = data.attr('title').split("||", 1).toString().trim();

                // Split it to get title and episode num seperate
                showData.title = showData.title.split(' Episode ', 2);

                if(showData.title) {
                	if(anime.find({ Title: [showData.title[0].toString().trim()] })) {
                        var show = {
                            Title: showData.title[0].toString().trim(),
                            WebsiteUrl: data.attr('href'),
                            EpisodeNumber: parseInt(showData.title[1]),
                            Medium: 'nwAnime.com',
                            FoundDate: Date.now(),
                            Following: false,
                        };

                        // SHOULD BE ABLE TO ABSTRACT THIS OUT FURTHER LATER
                        anime.find( { Title: show.Title } ).then(function(data) {
                            // Check if the anime exists in the Anime DB - If Not THEN Save
                            if (data.length == 0) {
                                var animeSeries = new anime({
                                    Title: show.Title,
                                    WebsiteUrl: show.WebsiteUrl,
                                    New: true,
                                    Following: false,
                                    FoundDate: Date.now()
                                }).save();
                            }             
                        });

                        // SHOULD BE ABLE TO ABSTRACT THIS OUT FURTHER LATER
                        var query = animeEpisode.find({ Title: show.Title, EpisodeNumber: show.EpisodeNumber }).exec();
                        query.then(function(data, err) {
                            // Check if the Episode Exists in the DB - If Not THEN Save
                            if (data.length == 0) {
                                var newEpisode = new animeEpisode({
                                    Title: show.Title,
                                    Href: show.WebsiteUrl,
                                    EpisodeNumber: show.EpisodeNumber,  
                                    WebsiteUrl: show.Medium,
                                    Watched: false,
                                    New: true,
                                    FoundDate: Date.now(),
                                    EmbedUrl: ""
                                }).save();
                            }
                        });

                    }
                }
            });
        }
    });


    // Set up to hit all of the host Urls and fetch embedUrl
    var query = animeEpisode.find({ EmbedUrl: "" }).exec();
    query.then( function(data) {

        for(var i = 0; i < data.length-1; i++) {

            var query = animeEpisode.findById( data[i].id).exec();
            query.then(function (result) {

                // Request to get html
                request(result.Href, function(error, response, html) {

                    if(!error) {
                        var $ = cheerio.load(html);

                        // select the attribute from the DOM
                        $('#embed_holder iframe').filter(function() {
                            var pageData = $(this);

                            result.EmbedUrl = pageData.attr('src');
                            result.save();
                        });
                    }
                });
            });
        }
    });

};

module.exports = new nwAnime();