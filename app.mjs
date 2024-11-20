import express from 'express';
import fetch from 'node-fetch';
import inspirationalQuotes from 'inspirational-quotes';

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// Define routes
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', async (req, res) => {
    res.render('index');
});

app.get('/arrays', (req, res) => {
    res.render('arrays');
});

app.get('/stacks', (req, res) => {
    res.render('stacks');
});

app.get('/trees', (req, res) => {
    res.render('trees');
});

app.get('/hash-tables', (req, res) => {
    res.render('hash-tables');
});

app.get('/inspirational-quote', async (req, res) => {
    let quote = inspirationalQuotes.getQuote();
    console.log(quote);
    let apiKey = "lqv1Mc6kqGPOC1eF7m5t1Fzxrl-donO_sQCHPqFF7-U";
    let url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&query=inspirational`;
    let response = await fetch(url);
    let data = await response.json();
    let randomImage = data.urls.full;
    res.render('inspirational-quote', { quote, randomImage });
});

// Starts the server
app.listen(3000, () => {
    console.log('server started on http://localhost:3000');
});