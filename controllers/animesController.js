var restful = require('node-restful');

module.exports = function(app, route) {

    // set up for REST
    var rest = restful.model(
        'anime',
        app.models.anime
    ).methods(['get', 'put', 'post']);

    app.models.anime.route('episodes', {
        detail: true,
        handler: function(req, res, next) {
            app.models.anime.findById(req.params.id, function(err, data) {
                app.models.animeEpisode.find({Title: data.Title}, function(err, data) {
                    res.send(data);
                });
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