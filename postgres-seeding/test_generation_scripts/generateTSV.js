const faker = require('faker');
const fs = require('fs');

console.log(new Date());
var seed = function() {
  for (let i = 0; i < 1000; i++) {
    const name = faker.company.companyName();
    var data = [i, name, 'test' + i];
    var row = data.join('\t');
    var tsv = row + "\r\n";
    fs.appendFileSync('./restaurants.tsv', tsv, 'utf-8');
  }
}

seed();
console.log(new Date());


// CREATE TABLE tsvtest (
//   id BIGSERIAL,
//   name VARCHAR(50) NOT NULL,
//   other VARCHAR(50) NOT NULL,
//   PRIMARY KEY (id)
// );

// db.tsvtest.insert({
//   id: 100000,
//   name: 'MongoDB is no sql database',
//   other: 'tutorials point',
// })