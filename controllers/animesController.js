var restful = require('node-restful');

module.exports = function(app, route) {
    // set up for REST
    var rest = restful.model(
        'anime',
        app.models.anime
    ).methods(['get', 'put', 'post']);

    // Alternate Detail Route Setup
    // route = animes/:title
    app.models.anime.route(':title', {
        detail: false,
        handler: function(req, res, next) {
            app.models.animeEpisode.find({Title: req.params.title}, function(err, data) {
                res.send(data);
            });
        }
    });

    app.models.anime.route('following', {
        detail: false,
        handler: function(req, res, next) {
            app.models.anime.find({ Following: true }, function(err, data) {
                res.send(data);
            });
        }
    });

    // Register this endpoint with the app
    rest.register(app, route);

    // Return middleware ?? per use case stuff?
    return function(req, res, next) {
        next();
    };
};