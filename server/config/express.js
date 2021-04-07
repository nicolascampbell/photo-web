const express = require('express');
const createError = require('http-errors');
module.exports = function () {
    var app = express();

    //get static files 
    app.use(express.static('public'));

    //Set middleware for the routes
    let indexMiddleware = require('../app/routes/index.js');
    indexMiddleware(app);
    let filmMiddleware = require('../app/routes/film.server.routes.js');
    filmMiddleware.getFilms(app);
    filmMiddleware.getFilm(app);
    filmMiddleware.getImageFromFilm(app);

    let collectionMiddleware = require('../app/routes/collection.server.routes.js');
    collectionMiddleware.getCollections(app);
    collectionMiddleware.getCollection(app);
    collectionMiddleware.getImageFromCollection(app);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // send error
        res.status(err.status || 500);
        res.send('error');
    });

    return app;
};

