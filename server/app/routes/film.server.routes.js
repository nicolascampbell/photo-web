const film_controller=require('../controllers/film.server.controller.js');
const films=require('mongoose').model('Collection');

module.exports.getFilms=function(app) {
    app.get('/Films', film_controller.getFilms);
};

module.exports.getFilm=function(app) {
    app.get('/Films/:filmId', film_controller.getFilm);
};

module.exports.getImageFromFilm=function(app) {
    app.get('/Films/:filmId/:imageId', film_controller.getImageFromFilm);
};

