var express = require('express'),
		ejs = require('ejs'),
		bodyParser = require('body-parser');

var app = express();

// Templating
// app.engine('html', ejs.__engine);
app.set('view engine', 'ejs');

// Data
var articles = [
	{
		title: "Sample",
		author: "Sample Author",
		description: "Sample Description"
	}
];

// Routes

app.get('/articles', function(req, res) {
	res.render('articles/articles', {articles: articles});
});

app.get('/articles/new', function(req, res) {
	res.render('articles/new');
});

app.post('/articles', function(req, res) {

});

app.get('/articles/:id', function(req, res) {
	res.render('articles/show');
});

app.get('/', function(req, res) {
	res.render('site/index');
});

app.get('/about', function(req, res) {
	res.render('site/about');
});

app.get('/contact', function(req, res) {
	res.render('site/contact');
});

app.listen(3000);


