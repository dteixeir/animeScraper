var express = require("express");           // express
var fs = require("fs");                     // file system
var request = require("request");           // ??
var cheerio = require("cheerio");           // request from pages
var bodyParser = require("body-parser");    // ??
var mongoose = require("mongoose");         // mongoose model
var methodOverride = require("method-override");
var _ = require('lodash');
var cron = require('node-cron');

// my defined classes
var animeFunctions = require('./classes/anime.js');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Connect to mongoDB
mongoose.connect('mongodb://localhost/anime');
mongoose.connection.once('open', function() {

    // Load models
    app.models = require('./models/index');

    // Load Routes
    var routes = require('./routes');

    // Loops through and pairs routes with controllers
    _.each(routes, function(controller, route) {
        app.use(route, controller(app, route));
    });

    console.log("Thare be dragons on port 3000");
    app.listen(3000);

/*
    var task = cron.schedule('* * * * *', function() {
        console.log('will execute every minute until stopped');
    });*/
    //animeFunctions.fetchAnimeTitles();


    var animeFunctions = require('./classes/anime.js');
    


    var anime = require("./models/anime.model.js");
    animeFunctions.fetchAnimeByField(anime, 'title');

    var rawr = anime({
        title: 'rawrness added',
        href: 'www.gooe.com',
        medium: 'nwanime' 
    });


});


// This returns everything in the animes collection
/*
app.get('/animes', function(req, res) {
    console.log('getting anime');
    anime.find({}).exec(function(err, animes) {
        if(err) {
            res.send('oops....');
        } else {
            res.json(animes);
        }
    });
});*/




/*
app.get("/scrape", function (req, res) {
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

                fs.appendFile('output.json', JSON.stringify(showData), function(err) {
                    //console.log('File successfully written - Check your proj directory for the output.json file');
                });
            });
        }
        
        // send message reminding user that this does not have a ui
        res.send('check your console!');

    });
});

*/



//exports = module.exports = app;