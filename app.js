var express = require('express'),
		ejs = require('ejs'),
		bodyParser = require('body-parser');

var app = express();

// body parser
app.use(bodyParser.urlencoded());

// Templating
// app.engine('html', ejs.__engine);
app.set('view engine', 'ejs');
app.set('view options', {
	layout: true
})

// Data
var articles = [
	{
		title: "Sample",
		author: "Sample Author",
		desc: "Sample Description"
	}
];

// Routes

app.get('/articles', function(req, res) {
	res.render('articles/articles', { articles: articles });
});

app.get('/articles/new', function(req, res) {
	res.render('articles/new');
});

app.post('/articles', function(req, res) {
	articles.push(req.body.article);
	console.log(req.body.article);
	res.redirect('/articles');
});

app.get('/articles/:id', function(req, res) {
	var index = req.params.id;
	var article = articles[index];
	res.render('articles/show', { article: article });
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


