var nwAnime = function () {};
var request = require("request");
var cheerio = require("cheerio");

nwAnime.prototype.scrape = function (anime, animeEpisode) {
    // grab list of anime titles and cross reference?
    console.log('test this function running!');

    // web scrapping magic!
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
                
                // If title is in animeList collection update??
                if(showData.title) {
                    if(anime.find({ title: [showData.title[0].toString().trim()] })) {
                        //console.log("the title is - " + showData.title);

                        var show = animeEpisode({
                            title: showData.title[0].toString().trim(),
                            href: data.attr('href'),
                            episodeNumber: parseInt(showData.title[1]),
                            medium: 'nwAnime.com'
                        });


                        anime.find( { title: [show.title] } ).then(function(data) {
                            if (data.length > 0){
                                //show.update();
                                show.save();
                            }                       
                        });


                        // If the anime title appears in ?WatchList DB table?  fetch from ?EpisodeList DB Table?
                        //var show = new animeEpisode(show);
                        //show.save();
                    }
                }
            });
        }
    });

};

module.exports = new nwAnime();