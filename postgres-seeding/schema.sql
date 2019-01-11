CREATE TABLE reviews (
  id BIGSERIAL,
  user_name VARCHAR(50) NOT NULL,
  restaurant_id INTEGER NOT NULL,
  content TEXT,
  order_items TEXT,
  rating INTEGER,
  delivery_rating INTEGER,
  order_rating INTEGER,
  update_date DATE NOT NULL,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  PRIMARY KEY (id)
);

CREATE TABLE restaurants (
  id BIGSERIAL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);


-- CREATE TABLE users (
--   id serial,
--   name VARCHAR(50) NOT NULL,
--   email VARCHAR(50),
--   password VARCHAR(50),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE restaurants (
--   id serial,
--   name VARCHAR(50) NOT NULL,
--   address VARCHAR(50) NOT NULL,
--   phone VARCHAR(50),
--   menu JSON,
--   PRIMARY KEY (id)
-- );