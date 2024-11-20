import express from 'express';
import fetch from 'node-fetch';
import inspirationalQuotes from 'inspirational-quotes';

const index = express();
index.set("view engine", "ejs");
index.use(express.static("public"));

// Define routes
index.get('/', (req, res) => {
    res.redirect('/home');
});

index.get('/home', async (req, res) => {
    res.render('index');
});

index.get('/arrays', (req, res) => {
    res.render('arrays');
});

index.get('/stacks', (req, res) => {
    res.render('stacks');
});

index.get('/trees', (req, res) => {
    res.render('trees');
});

index.get('/hash-tables', (req, res) => {
    res.render('hash-tables');
});

index.get('/inspirational-quote', async (req, res) => {
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
index.listen(3000, () => {
    console.log('server started on port 3000');
});