DROP TABLE IF EXISTS groups CASCADE;

CREATE TABLE groups (
  id SERIAL PRIMARY KEY,
 	name varchar(255),
 	picture text,
  updated_at text
);