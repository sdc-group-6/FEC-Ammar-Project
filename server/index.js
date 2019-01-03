const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/db_modules');

const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/restaurants/:id', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/restaurants/reviews', (req, res) => {
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
  // on reviews router get all reviews from the database
  db.getReviewsByRestaurantId(req.params.id, (err, data) => {
    if (err) {
      res.status(501).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
