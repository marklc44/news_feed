var express = require('express'),
		ejs = require('ejs'),
		bodyParser = require('body-parser')
		ejsLayouts = require('express-ejs-layouts');

var app = express();

// body parser
app.use(bodyParser.urlencoded());

// Templating
// app.engine('html', ejs.__engine);
app.set('view engine', 'ejs');
app.set('layout', 'layout');

app.use(ejsLayouts);
app.use("/assets", express.static(__dirname + '/assets'));

// Data
var articles = [
	{
		title: "Lex Luther on Trial",
		author: "Jimmie Olson",
		desc: "A jury deliberates on charges of villainy, and nastiness."
	},
	{
		title: "Lois Lane 30 minute ab workout",
		author: "Clark Kent",
		desc: "Get abs that would make Superman swoon."
	}
];

// Layout Utility

var layoutsFolder = __dirname + '/views';

// Routes

app.get('/articles', function(req, res) {
	res.render('articles/articles', { 
		articles: articles,
		layout: 'layout'
	 });
});

app.get('/articles/new', function(req, res) {
	res.render('articles/new', {layout: 'layout'});
});

app.post('/articles', function(req, res) {
	articles.push(req.body.article);
	console.log(req.body.article);
	res.redirect('/articles');
});

app.get('/articles/:id', function(req, res) {
	var index = req.params.id;
	var article = articles[index];
	res.render('articles/show', { 
		article: article,
		layout: 'layout'
	});
});

app.get('/', function(req, res) {
	res.render('site/index', {layout: 'layout'});
});

app.get('/about', function(req, res) {
	res.render('site/about', {layout: 'layout'});
});

app.get('/contact', function(req, res) {
	res.render('site/contact', {layout: 'layout'});
});

app.listen(3000);


