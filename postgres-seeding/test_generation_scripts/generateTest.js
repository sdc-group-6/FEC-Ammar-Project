const faker = require('faker');
const fs = require('fs');
var id = 0;

function getRandomMenuItems() {
  let result = {};
  const randomNum = faker.random.number({'min': 0,'max': 3});
  for (let i = 0; i < randomNum; i++) {
    result[faker.random.number({'min': 1,'max': menu.length})] = '';
  }
  return Object.keys(result);
}

var seed20Reviews = function() {
  var count = 0;
  var csv = '';
  for (let i = 50001; i <550001; i++) {
    const restaurant_id = i;
    for (let j = 0; j < 20; j++) {
      csv += id++ + '~' + faker.name.findName() + '~' + restaurant_id + '~' + faker.lorem.sentences() + '~' +
            getRandomMenuItems() + '~' + faker.random.number({'min': 1,'max': 5}) + '~' +
            faker.random.number({'min': 1,'max': 5}) + '~' + faker.random.number({'min': 1,'max': 5}) + '~' + 
            faker.date.between('2018-01-01', '2019-01-01').toLocaleDateString('en-US') + '\r\n';
    }
     // fs.appendFileSync('./data/20Reviews.csv', csv, 'utf-8');
     if(i % 50000 === 0) {
       count++;
       fs.writeFileSync(`./data/20Reviews${count}.csv`, csv)
       csv = '';
      }
  }
  
}

seed20Reviews();