const faker = require('faker');
const fs = require('fs');
var stream = fs.createWriteStream('data.csv');

let csvContent = "data:text/csv;charset=utf-8,";
const seedUsersTable = function() {
  for (let i = 0; i < 1000000; i++) {
    const userName = faker.name.findName();
    const restaurantName = faker.internet.email();
    const content = faker.internet.password();
    const order_items = 'food';
    const rating = faker.random.number({'min': 1,'max': 5});;
    const delivery_rating = faker.random.number({'min': 1,'max': 5});;
    const order_rating = faker.random.number({'min': 1,'max': 5});;
    var update_date = faker.date.between('2018-01-01', '2019-01-01');
    update_date = update_date.toLocaleDateString('en-US');

    var data = [userName, restaurantName, content, order_items, rating, delivery_rating, order_rating, update_date];
    let row = data.join(",");
    var csv = row + "\r\n";
    stream.write(csv, function() {

    })
  }
}

var rows = seedUsersTable();

// let csvContent = "data:text/csv;charset=utf-8,";

// rows.forEach(function(rowArray){
//   let row = rowArray.join(",");
//   csvContent += row + "\r\n";
// }); 

// fs.writeFile('data.csv', csvContent, (err) => {
//   if (err) throw err;
// })

