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

CREATE TABLE film_category (
    film_id INT REFERENCES film(film_id),
    category_id INT REFERENCES category(category_id),
    PRIMARY KEY (film_id, category_id)
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

INSERT INTO film_category (film_id, category_id) VALUES
(1, 1), 
(1, 3), 
(1, 4), 
(1, 5),
(2, 1), 
(2, 2), 
(3, 2),
(3, 3),
(4, 4),
(4, 5),
(5, 1),
(5, 3); 