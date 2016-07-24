var nwAnime = function () {};
var request = require("request");
var cheerio = require("cheerio");

nwAnime.prototype.scrape = function (anime) {
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
                showData.episodeNum = parseInt(showData.title[1]);
                showData.title = showData.title[0].toString().trim();
                
                // Grab hyper link
                showData.href = data.attr('href');
                console.log(showData);
            });
        }
    });
};

module.exports = new nwAnime();