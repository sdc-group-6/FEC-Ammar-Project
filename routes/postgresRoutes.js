
var config = require('./config.js');
var pgp = require('pg-promise')(config);

var db = pgp(config);

//CRUD

//Create - post
// app.post('/reviews:restaurant_id', (req, res) => {
//   var query = `INSERT INTO reviews (user_name, restaurant_id, content, order_itmes, rating, delivery_rating, order_rating, update_data) 
//   VALUES (${user_name}, ${req.params.restaurant_id}, ${content}, ${order_items}, ${rating}, ${deilvery_rating}, ${order_rating}, ${update_date})`;
//   db.one(query)
//   .then((data) => {
//     console.log('Insert Complete');
//   })
//   .catch((err) => {
//     console.log('Error', err);
//   }
// );

//Retrieve - get
// app.get('/reviews:restaurant_id', (req, res) => {});
var getReviews = function(req, res, restaurantId) {
  console.log('GET REQUEST ENDPOINT');
  console.log('RESTAURANT ID ', restaurantId);
  var query = `SELECT restaurants.name, reviews.* FROM reviews INNER JOIN restaurants ON reviews.restaurant_id=restaurants.id WHERE reviews.restaurant_id=$1`;
  db.any(query, `${restaurantId}`)
  .then((data) => {
    console.log(data, data.length);
    res.send(data);
  })
  .catch((err) => {
    console.log('Error', err);
  })
};  
  
//Update - put
/*
What would update? 
Update the text in the review

*/

// app.put('/reviews:restaurant_id', (req, res) => {
//   var query = `UPDATE reviews SET content = ${updated_content} WHERE restaurant_id=${req.params.restaurant_id}`;
//   db.one(query)
//   .then((data) => {
//     console.log('Insert Complete');
//   })
//   .catch((err) => {
//     console.log('Error', err);
//   })
// });

//Delete - delete 
//delete a review from a restaurant

// app.delete('/reviews:restaurant_id', (req, res) => {
//   var query = `DELETE FROM reviews WHERE restaurant_id=${req.params.restaurant_id}`;
//   db.one(query)
//   .then((data) => {
//     console.log('Delete Complete');
//   })
//   .catch((err) => {
//     console.log('Error', err);
//   });
// });

module.exports = {
  getReviews, 
}