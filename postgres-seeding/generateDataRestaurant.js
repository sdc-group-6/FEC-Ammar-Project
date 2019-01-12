const faker = require('faker');
const fs = require('fs');

var seed = function() {
  for (let i = 0; i < 10000000; i++) {
    const name = faker.company.companyName();
    var data = [i, name];
    var row = data.join('\t');
    var tsv = row + "\r\n";
    fs.appendFileSync('./restaurants1.tsv', tsv, 'utf-8');
  }
}
console.log(new Date());
seed();
console.log(new Date());