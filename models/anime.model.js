var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Anime Schema
var animeSchema = new Schema({
    title: String,
    href: String,
    medium: String
});

// Creates the Schema object!
var Anime = mongoose.model('anime', animeSchema);

// Export the model schema
module.exports = Anime;