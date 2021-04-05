const collection_controller=require('../controllers/collection.server.controller.js');


module.exports.getCollections=function(app) {
    app.get('/Collections', collection_controller.getCollections);
};

module.exports.getCollection=function(app) {
    app.get('/Collections/:collectionId', collection_controller.getCollection);
};

module.exports.getImageFromFilm=function(app) {
    app.get('/Collections/:collectionId/:imageId', collection_controller.getImageFromCollection);
};