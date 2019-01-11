var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://username:password@host:port/database')

//CRUD

//Create - post
app.post('/reviews:restaurant_id', (req, res) => {
  var query = `INSERT INTO reviews (user_name, restaurant_id, content, order_itmes, rating, delivery_rating, order_rating, update_data) 
  VALUES (${user_name}, ${req.params.restaurant_id}, ${content}, ${order_items}, ${rating}, ${deilvery_rating}, ${order_rating}, ${update_date})`;
  db.one(query)
  .then((data) => {
    console.log('Insert Complete');
  })
  .catch((err) => {
    console.log('Error', err);
  }
)

//Retrieve - get
app.get('/reviews:restaurant_id', (req, res) => {
  var query = `SELECT FROM * reviews WHERE restaurant_id=${req.params.restaurant_id}`;
  db.one(query)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log('Error', err);
  })
})

//Update - put
/*
What would update? 

*/

app.put('/reviews:restaurant_id', (req, res) => {

})

//Delete - delete 
//delete a review from a restaurant
//delete a restaurant from restaurant table?
app.delete('/reviews:restaurant_id', (req, res) => {

})