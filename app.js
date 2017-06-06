'use strict';

const express = require('express');
const path = require('path');
//init App
const app = express();

//load View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//home routes
app.get('/', (req, res) => {
//make a static instead mongoDB for now
    var articles = [
    {
        id: 1,
        title: 'Article One',
        author: 'VBrad Pitt',
        body: 'This is BP'
    },
    {
        id: 2,
        title: 'Article Two',
        author: 'Angie Jolly',
        body: 'This is AJ'
    },
    {
        id: 3,
        title: 'Article Three',
        author: 'Lucien Poletta',
        body: 'This is LP'
    }
];
    res.render('index', {
        title: 'HOME',
        articles: articles
    });
});

//add route
app.get('/articles/add', (req, res) => {
    res.render('add_article', {
        title: 'Add Article'
    });
});

app.listen(3000, () => {
    console.log('Server running <@))>< at 3000');
   });
