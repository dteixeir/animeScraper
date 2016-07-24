var mongoose = require('mongoose');

// Anime Schema
var animeSchema = new mongoose.Schema({
    title: String,
    href: String,
    medium: String
});

// Creates the Schema object!
var Anime = mongoose.model('anime', animeSchema);

// Export the model schema
module.exports = Anime;