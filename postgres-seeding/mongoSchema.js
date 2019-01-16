var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviews = new Schema({
  user_name: String,
  restaurant_id: Number,
  content: String,
  order_itmes: String,
  rating: Number,
  delivery_rating: Number,
  order_rating: Number,
  update_date: Date
})


