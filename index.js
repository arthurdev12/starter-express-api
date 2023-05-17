const express = require('express');

const app = express();

//register view engine

app.set('view engine', 'ejs');

const path = require('path');
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));
app.listen(3000);
//morgan
// app.use(morgan('dev'))
// middleware static files

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index', { title: 'Home' });
});
app.get('/about', (req, res) => {
	res.render('about', { title: 'About' });
});
app.get('/contact', (req, res) => {
	res.render('contact', { title: 'Contact' });
});

// 404 page
app.use((req, res) => {
	// res.status(404).sendFile('./views/404.html', { root : __dirname })
	res.status(404).render('404', { title: '404' });
});
