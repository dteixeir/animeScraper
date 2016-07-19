var mongoose = require('mongoose');

// Anime Schema
var AnimeSchema = new mongoose.Schema({
    title: String,
    href: String,
    medium: String
});

// Export the model schema
module.exports = AnimeSchema;