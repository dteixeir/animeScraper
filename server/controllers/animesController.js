var express = require('express');
var ObjectId = require('mongodb').ObjectID;

module.exports = function(app, route) {
 
    // Grabs all anime
    app.get("/animes", function(req, res, next) {
        app.models.anime.find({}, function(err, data) {
            res.send(data);
        });
    });

    // Grabs list of anime you are following
    app.get("/animes/following", function(req, res, next) {
        app.models.anime.find({Following: {$eq: true}}, function(err, data) {
            res.send(data);
        });
    });

    // Grabs all episodes for an anime
    app.get("/animes/:title", function(req, res, next) {
        app.models.animeEpisode.find({Title: req.params.title}, function(err, data) {
            console.log(data);
            res.send(data);
        });
    });

    // Grabs specific episode
    app.get("/animes/:title/:id", function(req, res, next) {
        app.models.animeEpisode.find({Title: req.params.title, _id: new ObjectId(req.params.id)}, function(err, data) {
            res.send(data);
        });
    });

    // Return middleware ?? per use case stuff?
    return function(req, res, next) {
        next();
    };
};