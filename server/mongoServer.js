require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const db = require('../database/db_modules');
const { seedDB } = require('../database/seeds');
const Mongo = require('../routes/mongoRoutes.js');


const app = express();
app.use(morgan('short'));
const PORT = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/restaurants/:id', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/reviews', (req, res) => {
  // on reviews router get all reviews from the database
  db.getAllReviews((err, data) => {
    if (err) {
      res.status(501).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/restaurants/:id/reviews', (req, res) => {
  Mongo.getReviews(req, res, req.params.id);
});

app.post('/restaurants/:id/reviews', (req, res) => {
  console.log('REACH POST');
  console.log('REQ.PARAMS ', req.params);
  Mongo.createReview(req, res, req.params.id);
})

app.get('/reviews/seed', (req, res) => {
  // seed the data base using and api
  seedDB();
  res.status(201).send('seeded the database');
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
