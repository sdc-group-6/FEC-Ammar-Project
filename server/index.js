const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database/db_modules');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '../client/dist'));

app.get('/reviews',(req,res) => {
  // on reviews router get all reviews from the database
  db.getAllReviews((err,data) => {
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