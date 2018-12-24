const faker = require('faker');
const db = require('../database');

// // generate 100 fake user
for (let i = 0; i < 100; i++) {
  let user_name = faker.internet.userName();
  let user_email = faker.internet.email();
  let user_password = faker.internet.password();
  db.query(`INSERT INTO users (name,email,password) VALUES ("${user_name}","${user_email}","${user_password}");`);
}


// // generate 100 fake restaurants
for (let i = 0; i < 100; i++) {
  let restaurant_name = faker.company.companyName();
  let restaurant_address = faker.address.streetAddress();
  let restaurant_phone = faker.phone.phoneNumber();
  db.query(`INSERT INTO restaurants (name,address,phone) VALUES ("${restaurant_name}","${restaurant_address}","${restaurant_phone}");`);
}

// generate 100 fake reviews for the first 10 restaurants
for (let i = 0; i < 100; i++) {
  let user_id = faker.random.number({'min': 1,'max': 100});
  let restaurant_id = faker.random.number({'min': 1,'max': 10});
  let content = faker.lorem.sentences();
  let rating = faker.random.number({'min': 1,'max': 5});
  let delivery_rating = faker.random.number({'min': 1,'max': 5});
  let order_rating = faker.random.number({'min': 1,'max': 5});
  let update_date = faker.date.between('2018-01-01', '2019-01-01');
  update_date = update_date.toLocaleDateString('en-US');
  db.query(`INSERT INTO reviews (user_id,restaurant_id,content,rating,delivery_rating,order_rating,update_date) VALUES (${user_id},${restaurant_id},"${content}",${rating},${delivery_rating},${order_rating},STR_TO_DATE("${update_date}","%m/%d/%Y"));`);
}
