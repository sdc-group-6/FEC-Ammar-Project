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
      res.send(data);
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