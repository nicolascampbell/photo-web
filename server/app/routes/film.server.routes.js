const film_controller = require('../controllers/film.server.controller.js');
const films = require('mongoose').model('Collection');

module.exports.getFilms = function (app) {
    app.get('/films', film_controller.get_films_list);
};

module.exports.getFilm = function (app) {
    app.get('/films/:filmId', film_controller.get_film);
};

module.exports.getImageFromFilm = function (app) {
    app.get('/films/:filmId/:imageId', film_controller.get_image_from_film);
};

