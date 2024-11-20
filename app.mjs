import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// Define routes
app.get('/home', (req, res) => {
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

// Starts the server
app.listen(3000, () => {
    console.log('server started on http://localhost:3000');
});