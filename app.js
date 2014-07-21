var express = require('express'),
		ejs = require('ejs'),
		bodyParser = require('body-parser');

var app = express();

// Templating
//app.engine();
app.set('view engine', 'ejs');


// Routes
app.get('/articles', function(req, res) {

});

app.get('/articles/new', function(req, res) {
	
});

app.post('/articles', function(req, res) {
	
});

app.get('/articles/:id', function(req, res) {
	
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/about', function(req, res) {
	
});

app.get('/contact', function(req, res) {
	
});

app.listen(3000);


