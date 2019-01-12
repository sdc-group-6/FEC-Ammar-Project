# FEC-Ammar-Project

> This Project is the Front-End-Capstone for Hack Reactor bootcamp
> in this repo my responsibility is to build a component that can read
> from a database records of reviews and display them as a grubhub style
> with slightly different style.

## Related Projects

  - https://github.com/HRSF108-Group7/FEC-profile
  - https://github.com/HRSF108-Group7/FEC-menu
  - https://github.com/HRSF108-Group7/FEC-suggestion

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## CRUD Operations

### Postgresql

CREATE

```sh
app.post('/reviews:restaurant_id', (req, res) => {
  var query = `INSERT INTO reviews (user_name, restaurant_id, content, order_itmes, rating, delivery_rating, order_rating, update_data) 
  VALUES (${user_name}, ${req.params.restaurant_id}, ${content}, ${order_items}, ${rating}, ${deilvery_rating}, ${order_rating}, ${update_date})`;
  db.one(query)
  .then((data) => {
    console.log('Insert Complete');
  })
  .catch((err) => {
    console.log('Error', err);
  }
)
```

RETRIEVE

```sh
app.get('/reviews:restaurant_id', (req, res) => {
  var query = `SELECT FROM * reviews WHERE restaurant_id=${req.params.restaurant_id}`;
  db.one(query)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log('Error', err);
  })
});
```

UPDATE

```sh
app.put('/reviews:restaurant_id', (req, res) => {
  var query = `UPDATE reviews SET content = ${updated_content} WHERE restaurant_id=${req.params.restaurant_id}`;
  db.one(query)
  .then((data) => {
    console.log('Insert Complete');
  })
  .catch((err) => {
    console.log('Error', err);
  })
});
```

DELETE

```sh
app.delete('/reviews:restaurant_id', (req, res) => {
  var query = `DELETE FROM reviews WHERE restaurant_id=${req.params.restaurant_id}`;
  db.one(query)
  .then((data) => {
    console.log('Delete Complete');
  })
  .catch((err) => {
    console.log('Error', err);
  });
});
```