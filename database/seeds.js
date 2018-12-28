const faker = require('faker');
const db = require('../database');

// // generate 100 fake user
for (let i = 0; i < 100; i++) {
  const userName = faker.internet.userName();
  const userEmail = faker.internet.email();
  const userPassword = faker.internet.password();
  db.query(`INSERT INTO users (name,email,password) VALUES ("${userName}","${userEmail}","${userPassword}");`);
}


// // generate 100 fake restaurants
for (let i = 0; i < 100; i++) {
  const restaurantName = faker.company.companyName();
  const restaurantAddress = faker.address.streetAddress();
  const restaurantPhone = faker.phone.phoneNumber();
  db.query(`INSERT INTO restaurants (name,address,phone) VALUES ("${restaurantName}","${restaurantAddress}","${restaurantPhone}");`);
}

// generate 100 fake reviews for the first 10 restaurants
for (let i = 0; i < 3000; i++) {
  const userId = faker.random.number({'min': 1,'max': 100});
  const restaurantId = faker.random.number({'min': 1,'max': 10});
  const content = faker.lorem.sentences();
  const rating = faker.random.number({'min': 1,'max': 5});
  const deliveryRating = faker.random.number({'min': 1,'max': 5});
  const orderRating = faker.random.number({'min': 1,'max': 5});
  let updateDate = faker.date.between('2018-01-01', '2019-01-01');
  updateDate = updateDate.toLocaleDateString('en-US');
  db.query(`INSERT INTO reviews (user_id,restaurant_id,content,rating,delivery_rating,order_rating,update_date) VALUES (${userId},${restaurantId},"${content}",${rating},${deliveryRating},${orderRating},STR_TO_DATE("${updateDate}","%m/%d/%Y"));`);
}
