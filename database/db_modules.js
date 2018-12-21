const db = require('../database');

const getAllReviews = function(callback) {
    // get All the reviews from the reviws database
    db.query(`SELECT reviews.id, users.name, restaurants.name, content, rating, delivery_rating, order_rating, update_date 
     FROM reviews 
     INNER JOIN users ON reviews.user_id = users.id 
     INNER JOIN restaurants ON reviews.restaurant_id = restaurants.id`,callback);

};

const getReviewsById = function(id,callback) {
    // get All the reviews from the reviws database by a resturant id

};

module.exports = {
    getAllReviews, getReviewsById
  };