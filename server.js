// ============================ REQUIRE ===============================
var Express = require('express');
var BodyParser = require('body-parser');
var Mongoose = require('mongoose');
var Port = 8888;

var App = Express();

var User = require('./assets/js/models/userModel');
var Tags = require('./assets/js/models/tagModel');
var Pics = require('./assets/js/models/picModel');


// ============================ CONTROLLERS ===========================
var TagsController = require('./assets/js/controllers/tagCtrl');
var UserController = require('./assets/js/controllers/userCtrl');
var PicController = require('./assets/js/controllers/picCtrl');


// ============================ MIDDLEWARE ============================
App.use(Express.static(__dirname + '/public'));
App.use(BodyParser.json());



// ============================ AUTHENTICATION ========================



// ============================ ENDPOINTS =============================
App.post('/api/tags', TagsController.create);
App.get('/api/tags', TagsController.get);

App.post('/api/user', UserController.create);
App.get('/api/user', UserController.get);

App.post('/api/pic', PicController.create);
App.get('/api/pic', PicController.get);




// ============================ CONNECTIONS ===========================
Mongoose.connect('mongodb://localhost:27017/imgwire');

App.listen(Port, function() {
	console.log('listening to ' + Port)
});