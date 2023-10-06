DROP TABLE IF EXISTS film;
DROP TABLE IF EXISTS film_category;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS actor;

CREATE TABLE film (
    film_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

CREATE TABLE category (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(25) NOT NULL
);

CREATE TABLE actor (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL
);

INSERT INTO actor (first_name, last_name) VALUES
  ('Tom', 'Hanks'),
  ('Scarlett', 'Johansson'),
  ('Johnny', 'Depp'),
  ('Meryl', 'Streep'),
  ('Brad', 'Pitt');

  INSERT INTO film (title) VALUES
  ('Avengers: Infinity War'),
  ('The Godfather'),
  ('Pulp Fiction'),
  ('Forrest Gump'),
  ('Fight Club');

  INSERT INTO category (category_name) VALUES
  ('Drama'),
  ('Crime'),
  ('Action'),
  ('Comedy'),
  ('Adventure');
