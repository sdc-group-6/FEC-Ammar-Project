var mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/restaurants';
const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

var Schema = mongoose.Schema;

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });

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

var getReviews = function(req, res, restaurantId) {
  var query = restaurants.where({id: restaurantId});
  query.findOne((err, data) => {
    if (err) {
      console.log('Error ', err);
    } else {
      console.log('DATA Returned');
      res.send(data);
    }
  })
}

module.exports = {
  getReviews,
}