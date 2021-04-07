const collection_controller=require('../controllers/collection.server.controller.js');


module.exports.getCollections=function(app) {
    app.get('/collections', collection_controller.get_collections_list);
};

module.exports.getCollection=function(app) {
    app.get('/collections/:collectionId', collection_controller.get_collection);
};

module.exports.getImageFromCollection=function(app) {
    app.get('/collections/:collectionId/:imageId',
            collection_controller.get_image_from_collection);
};