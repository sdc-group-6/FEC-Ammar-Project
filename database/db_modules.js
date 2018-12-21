const db = require('../database');

const getAllReviews = function(callback) {
    // get All the reviews from the reviws database
    db.query(`SELECT reviews.id, users.name AS user_name, restaurants.name AS restaurant_name, content, rating, delivery_rating, order_rating, update_date 
     FROM reviews 
     INNER JOIN users ON reviews.user_id = users.id 
     INNER JOIN restaurants ON reviews.restaurant_id = restaurants.id`,callback);

};

const getReviewsByRestaurantId = function(id,callback) {
    // get All the reviews from the reviws database by a resturant id
    db.query(`SELECT reviews.id, users.name AS user_name, restaurants.name AS restaurant_name, content, rating, delivery_rating, order_rating, update_date 
     FROM reviews 
     INNER JOIN users ON reviews.user_id = users.id 
     INNER JOIN restaurants ON reviews.restaurant_id = restaurants.id
     WHERE reviews.restaurant_id = ${id}`,callback);

};

module.exports = {
    getAllReviews, getReviewsByRestaurantId
  };