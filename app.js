const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
Genre = require('./models/genre')

//connect to mongoose

mongoose.connect('mongodb://localhost/bookstore');
const db = mongoose.connection

app.get('/', function(req, res){
    res.send('Please use the /api/books or /api/genres')
});

app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres)

    });
})

app.listen(3000);
console.log('Running on port 3000...')