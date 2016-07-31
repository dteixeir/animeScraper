var AnimeFunctions = function () {};

/*  Function I NEED
PRIORITY!
3- update   -   (Done? - Mongoose?) update anime follow status
                    ??? - Do I want to take various websites an episode is available at? - ???

1- insert   -   (Done - Handled by Mongoose) insert new anime

2- select   -   (Done) Select * Anime
                (Done) Select by Title

                select anime being followed
                    select those episodes
                Select * new animes
                    select those episodes             
*/

// This class will assume Collection Type is ANIME!!!!!
var models = require("../models/index.js");
var Anime = models.anime;

// fetch all animes
AnimeFunctions.prototype.getAnimeList = function(){
    Anime.find({}, function(err, Anime) {
        if(err)
            throw err;

        //console.log("anime list: " + Anime);
    });
}

// Fetch Anime by Title
AnimeFunctions.prototype.getAnimeByTitle = function (title) {
    // grab list of anime titles and cross reference?
    Anime.find({Title: [title]}, function(err, Anime) {
        if (err) 
            throw err;
        //console.log('Animes Matching: ' + title + ": " + Anime);
        return Anime;
    });
}


// Currently overkill
// More of a universal plugin to search for something in a column and replace it!
AnimeFunctions.prototype.animeUpdateEpisodeNumber = function(collectionType, newValue, oldValue, KeyName) {
    collectionType.findOneAndUpdate({ [KeyName]: newValue }, { [KeyName]: oldValue }, function(err, collectionType) {
        if (err) throw err;
            //console.log('rawr saved successfully???');
    });
};

module.exports = new AnimeFunctions();