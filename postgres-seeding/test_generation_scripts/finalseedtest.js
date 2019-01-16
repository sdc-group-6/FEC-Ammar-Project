const faker = require('faker');
const fs = require('fs');
var stream = fs.createWriteStream('data.csv');
var id = 0;

function getRandomIntCeil(max) {
  return Math.ceil(Math.random() * Math.ceil(max));
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function getRandomMenuItems() {
  let result = {};
  const randomNum = getRandomInt(4);
  for (let i = 0; i < randomNum; i++) {
    result[getRandomIntCeil(5)] = '';
  }
  return Object.keys(result);
}

// Have 5k restaurants have 1000 reviews each
var seed1000Reviews = function() {
  for (let i = 0; i < 50; i++) {
    var tsv = '';
    const restaurant_id = i;
    for (let j = 0; j < 1000; j++) {
      tsv += id++ + '\t' + faker.name.findName() + '\t' + restaurant_id + '\t' + faker.lorem.sentences() + '\t' +
      getRandomMenuItems() + '\t' + getRandomIntCeil(5) + '\t' +
      getRandomIntCeil(5) + '\t' + getRandomIntCeil(5) + '\t' + 
      faker.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    }
    fs.appendFileSync('./data/1000Reviews.tsv', tsv, 'utf-8');
  }
}
console.log('BEGINNING', new Date());
seed1000Reviews();
console.log('Finished 1000', new Date());

var seed100Reviews = function() {
  for (let i = 50; i <550; i++) {
    var tsv = '';
    const restaurant_id = i;
    for (let j = 0; j < 100; j++) {
      tsv += id++ + '\t' + faker.name.findName() + '\t' + restaurant_id + '\t' + faker.lorem.sentences() + '\t' +
      getRandomMenuItems() + '\t' + getRandomIntCeil(5) + '\t' +
      getRandomIntCeil(5) + '\t' + getRandomIntCeil(5) + '\t' + 
      faker.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    }
    fs.appendFileSync('./data/100Reviews.tsv', tsv, 'utf-8');
  }
}
console.log(new Date());
seed100Reviews();
console.log('Finished 100', new Date());

var seed10Reviews = function() {
  for (let i = 550; i <5550; i++) {
    var tsv = '';
    const restaurant_id = i;
    for (let j = 0; j < 10; j++) {
      tsv += id++ + '\t' + faker.name.findName() + '\t' + restaurant_id + '\t' + faker.lorem.sentences() + '\t' +
      getRandomMenuItems() + '\t' + getRandomIntCeil(5) + '\t' +
      getRandomIntCeil(5) + '\t' + getRandomIntCeil(5) + '\t' + 
      faker.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    }
    fs.appendFileSync('./data/10Reviews.tsv', tsv, 'utf-8');
  }
}
console.log(new Date());
seed10Reviews();
console.log('Finished 10', new Date());

var seed5Reviews = function() {
  for (let i = 5550; i <25550; i++) {
    var tsv = '';
    const restaurant_id = i;
    for (let j = 0; j < 5; j++) {
      tsv += id++ + '\t' + faker.name.findName() + '\t' + restaurant_id + '\t' + faker.lorem.sentences() + '\t' +
      getRandomMenuItems() + '\t' + getRandomIntCeil(5) + '\t' +
      getRandomIntCeil(5) + '\t' + getRandomIntCeil(5) + '\t' + 
      faker.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    }
    fs.appendFileSync('./data/5Reviews.tsv', tsv, 'utf-8');
  }
}
console.log(new Date());
seed5Reviews();
console.log('Finished 5', new Date());

var seed1Reviews = function() {
  for (let i = 25550; i < 75550; i++) {
    var tsv = '';
    const restaurant_id = i;
    tsv += id++ + '\t' + faker.name.findName() + '\t' + restaurant_id + '\t' + faker.lorem.sentences() + '\t' +
    getRandomMenuItems() + '\t' + getRandomIntCeil(5) + '\t' +
    getRandomIntCeil(5) + '\t' + getRandomIntCeil(5) + '\t' + 
    faker.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    fs.appendFileSync('./data/1Reviews.tsv', tsv, 'utf-8');
  }
}
console.log(new Date());
seed1Reviews();
console.log('Finished 1', new Date());