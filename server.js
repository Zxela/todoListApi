const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'), //import models
    bodyParser = require('body-parser');

// Mongoose instance url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res) {
    res.status(404).send({
        url: req.originalUrl + ' not found'
    })
})

var routes = require('./api/routes/todoListRoutes'); //import routes
routes(app); //register the routes

app.listen(port);

console.log('todo list RESTful API server started on port: ' + port);