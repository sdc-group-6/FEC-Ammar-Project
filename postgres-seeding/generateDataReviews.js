const faker = require('faker');
const fs = require('fs');
var stream = fs.createWriteStream('data.csv');
var id = 0;

function getRandomMenuItems() {
  let result = {};
  const randomNum = faker.random.number({'min': 0,'max': 3});
  for (let i = 0; i < randomNum; i++) {
    result[faker.random.number({'min': 1,'max': 5})] = '';
  }
  return Object.keys(result);
}

// Have 5k restaurants have 1000 reviews each
var seed1000Reviews = function() {
  for (let i = 0; i < 5000; i++) {
    var tsv = '';
    const restaurant_id = i;
    for (let j = 0; j < 1000; j++) {
      tsv += id++ + '\t' + faker.name.findName() + '\t' + restaurant_id + '\t' + faker.lorem.sentences() + '\t' +
            getRandomMenuItems() + '\t' + faker.random.number({'min': 1,'max': 5}) + '\t' +
            faker.random.number({'min': 1,'max': 5}) + '\t' + faker.random.number({'min': 1,'max': 5}) + '\t' + 
            faker.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    }
    fs.appendFileSync('./data/1000Reviews.tsv', tsv, 'utf-8');
  }
}
console.log(new Date());
seed1000Reviews();
console.log('Finished 1000', new Date());

var seed100Reviews = function() {
  for (let i = 5000; i <55000; i++) {
    var tsv = '';
    const restaurant_id = i;
    for (let j = 0; j < 100; j++) {
      tsv += id++ + '\t' + faker.name.findName() + '\t' + restaurant_id + '\t' + faker.lorem.sentences() + '\t' +
            'orderItem' + '\t' + faker.random.number({'min': 1,'max': 5}) + '\t' +
            faker.random.number({'min': 1,'max': 5}) + '\t' + faker.random.number({'min': 1,'max': 5}) + '\t' + 
            faker.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    }
    fs.appendFileSync('./data/100Reviews.tsv', tsv, 'utf-8');
  }
}
console.log(new Date());
seed100Reviews();
console.log('Finished 100', new Date());

var seed10Reviews = function() {
  for (let i = 55000; i <555000; i++) {
    var tsv = '';
    const restaurant_id = i;
    for (let j = 0; j < 10; j++) {
      tsv += id++ + '\t' + faker.name.findName() + '\t' + restaurant_id + '\t' + faker.lorem.sentences() + '\t' +
            'orderItem' + '\t' + faker.random.number({'min': 1,'max': 5}) + '\t' +
            faker.random.number({'min': 1,'max': 5}) + '\t' + faker.random.number({'min': 1,'max': 5}) + '\t' + 
            faker.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    }
    fs.appendFileSync('./data/10Reviews.tsv', tsv, 'utf-8');
  }
}
console.log(new Date());
seed10Reviews();
console.log('Finished 10', new Date());

var seed5Reviews = function() {
  for (let i = 555000; i <2555000; i++) {
    var tsv = '';
    const restaurant_id = i;
    for (let j = 0; j < 5; j++) {
      tsv += id++ + '\t' + faker.name.findName() + '\t' + restaurant_id + '\t' + faker.lorem.sentences() + '\t' +
            'orderItem' + '\t' + faker.random.number({'min': 1,'max': 5}) + '\t' +
            faker.random.number({'min': 1,'max': 5}) + '\t' + faker.random.number({'min': 1,'max': 5}) + '\t' + 
            faker.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    }
    fs.appendFileSync('./data/5Reviews.tsv', tsv, 'utf-8');
  }
}
console.log(new Date());
seed5Reviews();
console.log('Finished 5', new Date());

var seed1Reviews = function() {
  for (let i = 2555000; i < 7555000; i++) {
    var tsv = '';
    const restaurant_id = i;
    tsv += id++ + '\t' + faker.name.findName() + '\t' + restaurant_id + '\t' + faker.lorem.sentences() + '\t' +
          'orderItem' + '\t' + faker.random.number({'min': 1,'max': 5}) + '\t' +
          faker.random.number({'min': 1,'max': 5}) + '\t' + faker.random.number({'min': 1,'max': 5}) + '\t' + 
          faker.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    fs.appendFileSync('./data/1Reviews.tsv', tsv, 'utf-8');
  }
}
console.log(new Date());
seed1Reviews();
console.log('Finished 1', new Date());

// node generateDataReviews.js

