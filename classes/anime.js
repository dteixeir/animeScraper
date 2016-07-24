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

// More of a universal plugin to search for something in a column and replace it!
AnimeFunctions.prototype.animeUpdateEpisodeNumber = function(collectionType, newValue, oldValue, KeyName) {
    collectionType.findOneAndUpdate({ [KeyName]: newValue }, { [KeyName]: oldValue }, function(err, collectionType) {
        if (err) throw err;
            console.log('rawr saved successfully???');
    });
};

// Fetchs all anime in the db
AnimeFunctions.prototype.fetchAll = function(collectionType) {
    collectionType.find({}).exec(function(err, collectionType) {
        if(err) {
            res.send('oops....');
        } else {
            // console.log(collectionType);
        }
    });
};

module.exports = new AnimeFunctions();