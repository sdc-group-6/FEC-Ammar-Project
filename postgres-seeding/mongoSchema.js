var mongoose = require('mongoose');
const faker = require('faker');
const fs = require('fs');
var Schema = mongoose.Schema;

const mongoURI = 'mongodb://localhost:27017/restaurants';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });


// var reviewsSchema = new Schema({
//   user_name: String,
//   restaurant_id: Number,
//   content: String,
//   order_itmes: String,
//   rating: Number,
//   delivery_rating: Number,
//   order_rating: Number,
//   update_date: Date
// });

var reviewsSchema = new Schema({
  user_name: String,
  content: String,
  order_items: String,
  rating: Number,
  delivery_rating: Number,
  order_rating: Number,
  update_date: Date
})

var restaurantSchema = new Schema ({
  id: Number, 
  restaurant_name: String,
  reviews: [reviewsSchema],

})

const restaurants = mongoose.model('restaurants', restaurantSchema);

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });

  module.exports = {
    restaurants,
  }


// var restaurant1 = new restaurant ({
//   id: 100,
//   restaurant_name: 'Joes',
//   reviews: [{
//     user_name: 'Paul',
//     content: 'This is some review',
//     order_items: '1,2,3',
//     rating: 4,
//     delivery_rating: 4,
//     update_date: 3
//   }, 
//   {
//     user_name: 'John',
//     content: 'This is some reviewer',
//     order_items: '1,,3',
//     rating: 3,
//     delivery_rating: 4,
//     update_date: 3
//   }]
// });

// restaurant1.save(function(){
//   console.log('saved restaurant1');
// })




// var reviews = mongoose.model('reviews', reviewsSchema);


