const faker = require('faker');
const fs = require('fs');
var stream = fs.createWriteStream('data.csv');
var id = 0;
let csvContent = "data:text/csv;charset=utf-8,";


// Have 50k restaurants have 100 reviews each
var seed100Reviews = function() {
  for (let i = 0; i < 50000; i++) {
    var csv = '';
    const restaurant_id = i;
    for (let j = 0; j < 100; j++) {
      csv += id++ + '~' + faker.name.findName() + '~' + restaurant_id + '~' + faker.lorem.sentences() + '~' +
            'orderItem' + '~' + faker.random.number({'min': 1,'max': 5}) + '~' +
            faker.random.number({'min': 1,'max': 5}) + '~' + faker.random.number({'min': 1,'max': 5}) + '~' + 
            faker.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    }
    fs.appendFileSync('./data/100Reviews.csv', csv, 'utf-8');
  }
}
seed100Reviews();

var seed20Reviews = function() {
  for (let i = 50001; i <550001; i++) {
    var csv = '';
    const restaurant_id = i;
    for (let j = 0; j < 20; j++) {
      csv += id++ + '~' + faker.name.findName() + '~' + restaurant_id + '~' + faker.lorem.sentences() + '~' +
            'orderItem' + '~' + faker.random.number({'min': 1,'max': 5}) + '~' +
            faker.random.number({'min': 1,'max': 5}) + '~' + faker.random.number({'min': 1,'max': 5}) + '~' + 
            fak
            er.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    }
    fs.appendFileSync('./data/20Reviews.csv', csv, 'utf-8');
  }
}
seed20Reviews();

var seed10Reviews = function() {
  for (let i = 550001; i <1550001; i++) {
    var csv = '';
    const restaurant_id = i;
    for (let j = 0; j < 10; j++) {
      csv += id++ + '~' + faker.name.findName() + '~' + restaurant_id + '~' + faker.lorem.sentences() + '~' +
            'orderItem' + '~' + faker.random.number({'min': 1,'max': 5}) + '~' +
            faker.random.number({'min': 1,'max': 5}) + '~' + faker.random.number({'min': 1,'max': 5}) + '~' + 
            fak
            er.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    }
    fs.appendFileSync('./data/10Reviews.csv', csv, 'utf-8');
  }
}
seed20Reviews();

var seed10Reviews = function() {
  for (let i = 1550001; i <2000000; i++) {
    var csv = '';
    const restaurant_id = i;
    for (let j = 0; j < 3; j++) {
      csv += id++ + '~' + faker.name.findName() + '~' + restaurant_id + '~' + faker.lorem.sentences() + '~' +
            'orderItem' + '~' + faker.random.number({'min': 1,'max': 5}) + '~' +
            faker.random.number({'min': 1,'max': 5}) + '~' + faker.random.number({'min': 1,'max': 5}) + '~' + 
            fak
            er.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    }
    fs.appendFileSync('./data/3Reviews.csv', csv, 'utf-8');
  }
}
seed3Reviews();

// node generateDataReviews.js

