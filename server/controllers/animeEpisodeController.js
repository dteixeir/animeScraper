var restful = require('node-restful');

module.exports = function(app, route) {
    // set up for REST
    var rest = restful.model(
        'animeEpisode',
        app.models.animeEpisode
    ).methods(['get']);

    // Register this endpoint with the app
    rest.register(app, route);

    // Return middleware ?? per use case stuff?
    return function(req, res, next) {
        next();
    };
};