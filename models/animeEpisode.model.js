var mongoose = require('mongoose');

// Anime Schema
var animeEpisodeSchema = new mongoose.Schema({
    title: String,
    href: String,
    episodeNumber: String,
    medium: String
});

// Creates the Schema object!
var AnimeEpisode = mongoose.model('animeEpisode', animeEpisodeSchema, 'animeEpisodes');

// Export the model schema
module.exports = AnimeEpisode;