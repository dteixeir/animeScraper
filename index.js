var express = require("express");           // express
var request = require("request");           // ??
var bodyParser = require("body-parser");    // ??
var mongoose = require("mongoose");         // mongoose model
var methodOverride = require("method-override");
var _ = require('lodash');

// my defined classes
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

    // Load classes
    app.classes = require('./classes/index');

    // Load Scrappers
    app.scrappers = require('./scrappers/index');

    // Load Routes
    var routes = require('./routes');

    // Loops through and pairs routes with controllers
    _.each(routes, function(controller, route) {
        app.use(route, controller(app, route));
    });

    console.log("Thare be dragons on port 3000");
    app.listen(3000);

    var anime = app.models.anime;
    app.classes.anime.fetchAnimeByField(app.models.anime, 'title');
    app.classes.anime.animeUpdateEpisodeNumber(anime, 'rawrness added', 'newValue', 'title');
    app.classes.anime.fetchAll(app.models.anime);

    // Run scrape job!
    app.scrappers.nwAnime.scrape();
});

exports = module.exports = app;