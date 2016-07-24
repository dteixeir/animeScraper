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
                
                // Grab hyper link
                //showData.href = data.attr('href');
                //console.log(showData);

                var stuff = anime({
                    title: showData.title[0].toString().trim(),
                    href: data.attr('href'),
                    episodeNumber: parseInt(showData.title[1]),
                    medium: 'nwAnime.com'
                });           

                // If the anime title appears in ?WatchList DB table?  fetch from ?EpisodeList DB Table?
                var stuff = new anime(stuff);
                stuff.save();

                // update each episode!
                var stuff2 = new animeEpisode(stuff).save();
            });
        }
    });

};

module.exports = new nwAnime();