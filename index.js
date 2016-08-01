var express = require("express");           // express
var request = require("request");           // ??
var bodyParser = require("body-parser");    // ??
var mongoose = require("mongoose");         // mongoose model
var methodOverride = require("method-override");
var _ = require('lodash');

// my defined classes
var app = express();
var router = express.Router();

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
// Do I need a table that stored just anime titles ??
var db = mongoose.connect('mongodb://localhost/anime');
mongoose.connection.once('open', function(db) {

    //var newStuff = db.collection("animeList");

    // Load models
    app.models = require('./models/index');

    // Load classes
    app.classes = require('./classes/index');

    // Load Scrapers
    app.scrapers = require('./scrapers/index');

    // Load Routes
    var routes = require('./routes');

    // Loops through and pairs routes with controllers
    _.each(routes, function(controller, route) {
        app.use(route, controller(app, route));
    });

    console.log("Thare be dragons on port 3000");
    app.listen(3000);

    var anime = app.models.anime;
    var animeFunctions = app.classes.animeFunctions;

    // Run scrape job!
    app.scrapers.nwAnime.scrape(app.models.anime, app.models.animeEpisode);
});

exports = module.exports = app;