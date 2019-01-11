const faker = require('faker');
const fs = require('fs');

var seed = function() {
  for (let i = 0; i < 2000000; i++) {
    const name = faker.company.companyName();
    var data = [i, name];
    var row = data.join('~');
    var csv = row + "\r\n";
    fs.appendFileSync('./data/restaurants.csv', csv, 'utf-8');
  }
}

seed();