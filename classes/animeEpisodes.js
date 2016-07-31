var AnimeEpisodeFunctions = function () {};

/*  Function I NEED
PRIORITY!
3- update   -   (Done? Mongoose?) Update episode watch status
                    ??? - Do I want to take various websites an episode is available at? - ???

1- insert   -   (Done - Handled by Mongoose) Insert new episode

2- select   -   (Done) Select * episodes
                (Done) Select * episodes where Title        
*/

// THESE NEED TO BE ABSTRACT ENOUGH TO WORK WITH DIFFERENT WEBSITE SCRAPPING OBJECTS
// This class will assume Collection Type is ANIME!!!!!
var Episodes = require("../models/index.js").animeEpisode;

// fetch all from animeEpisodes
AnimeEpisodeFunctions.prototype.getAllAnimeEpisodes = function(){
    Episodes.find({}, function(err, Episodes) {
        //console.log(episodes);
        if(err)
            return err;
        return Episodes;
    });
}

// Fetch Episodes by Title
AnimeEpisodeFunctions.prototype.getAllAnimeEpisodes = function(title){
    Episodes.find({Title: title}, function(err, Episodes) {
        if(err)
            return err;
        //console.log("Anime Episode List: " + Episodes);
        return Episodes;
    });
}

module.exports = new AnimeEpisodeFunctions();