//var anime = require("../models/anime.model.js");
var AnimeFunctions = function () {};

AnimeFunctions.prototype.fetchAnimeByField = function (anime, field) {
    // grab list of anime titles and cross reference?
    anime.distinct(field, function(err, anime) {
        if (err) throw err;
            console.log('distinct title list')
            console.log(anime)
            return anime;
    });
};

// Find and update episode number
function animeUpdateEpisodeNumber () {
    anime.findOneAndUpdate({title:'rawrness'}, {title:'rawrness added'}, function(err, anime) {
        if (err) throw err;

            console.log(anime);
            console.log('rawr saved successfully???');
    });
};

module.exports = new AnimeFunctions();