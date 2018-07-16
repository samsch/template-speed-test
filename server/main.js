'use strict';
const express = require('express');
const app = express();

const asset = {
  js: [
    '/index.js',
    '/other.js',
  ],
  css: [
    '/index.css',
    '/other.css',
  ],
};

const posts = [
  {
    title: 'Mary had a Little Lamb',
    post: 'Mary had a little lamb. It\'s fleece was white as snow.',
  },
  {
    title: 'The Quick Brown Fox',
    post: 'The quick brown fox jumped over the lazy dog',
  },
  {
    title: 'An Apple',
    post: 'An apple a day keeps the doctor away.',
  },
];

app.set('view engine', 'pug');

app.get('/pug', (req, res) => {
  res.render('pug', {
    posts,
    asset,
  });
});

const reactRender = require('../views/react');

app.get('/react', (req, res) => {
  res.send(reactRender({
    posts,
    asset,
  }));
});

const preactRender = require('../views/preact');

app.get('/preact', (req, res) => {
  res.send(preactRender({
    posts,
    asset,
  }));
});

const hyperscriptRender = require('../views/hyperscript');

app.get('/hyperscript', (req, res) => {
  res.send(hyperscriptRender({
    posts,
    asset,
  }));
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  res.status(500);
  console.log(err);
  if (req.accepts('html')) {
    res.send('Something went wrong. Please refresh and try again.');
    return;
  }
  res.json({
    error:
      'Something went wrong processing your request, please try again.',
  });
});

app.listen(3400, () => {
  console.log('Example app listening on port 3400.');
});
