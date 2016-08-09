//routes.js

//grab model to be used
var User = require("./models/user");

module.exports = function(app){
    app.get('/api/budget/:id', function(req, res) {
        User.find({id : req.params.id}, function(err, users) {


            if (err)   
                res.send(err);
            res.json(users);
        });
    });

    app.post('/api/login/:id', function(req, res) {
        User.find({id : req.params.id, password : req.body.userPassword}, function(err, users) {

            if (err) 
                res.send(err);
            res.json(users);
        });
    });

    api.put('/api/create', function(req, res) {
        var data = {name : req.body.userData.name, data : [], id : req.body.userData.id, password : req.body.userData.password};
        User.create(data, function(err, user) {

            if (err)
                res.send(err);
        res.json(data);
        });
    });

    app.get("*", function(req, res) {
        res.sendfile('./public/views/index.html');
    });

};