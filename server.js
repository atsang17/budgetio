//server.js


//moduels
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

//configuration

//config files
var dp = reqiore(./config/db);

//set our port
var port = process.env.PORT || 8080;

//connecto to our mongoose db
//uncomment when you ahve your db credentials in config/db.js
//mongoose.connect(db.url);


//get all data of the body (POST) parameters
//parse body application
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//override with X-HTTP-Method-Override header in the request. simulate Delete
app.use(methodOverride('X-HTTP-Method-Override'));

//set the static files location /public/img will be /img for users
app.use(express.static(__dirname + "/public"));

//routes
require("./app/routes")(app);

//start app
//start up the app from location https://localhost:8080
app.listen(port);

console.log("Reading from port " + port);

//expose app
exports = module.exports = app;