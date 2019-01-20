var mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/restaurants';
var redisClient = require('redis').createClient;
var redis = redisClient(6379, 'localhost');
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

var getReviews = function(req, res, restaurant_id) {
  redis.get(restaurant_id, (err, data) => {
    if(err) {
      console.log('restaurant not cached', err);
    } else if(data) {
      // console.log('sending cached data');
      // console.log('CACHED DATA ', JSON.parse(data));
      res.send(JSON.parse(data));
    } else {
      // var query = restaurants.where({id: restaurant_id});
      // query.findOne((err, data) => {
      restaurants.find({id: restaurant_id}, (err, data) => {
        if (err) {
          console.log('Error ', err);
        } else {
          var restaurant = data[0];
          if (restaurant.reviews.length > 10) {
            var top10 = [];
            for (var i = 0; i < 10; i++) {
              top10.push(restaurant.reviews[i]);
            }
            restaurant = {
              id: restaurant.id,
              restaurant_name: restaurant.restaurant_name,
              reviews: top10,
            }
          }
          redis.set(restaurant_id, JSON.stringify(restaurant), () => {
            // console.log('data has been cached');
            // console.log('data that has been cached ', data);
            res.send(restaurant);
          })
        }
      });
    }
  })
}

var createReview = function(req, res, restaurantId) {

  var newReview = {
    user_name: req.body.user_name,
    content: req.body.content,
    order_items: req.body.order_items,
    rating: req.body.rating,
    delivery_rating: req.body.delivery_rating,
    order_rating: req.body.order_rating,
    update_date: req.body.update_date
  };

  restaurants.findOneAndUpdate({id: req.params.id}, {$push:{reviews: newReview}}, function(err) {
    if (err) {
      console.log('Error posting Data ', err); 
      } else {
        console.log('Post successful');
        res.sendStatus(200);
      }
    }
  );
}

module.exports = {
  getReviews, createReview
}