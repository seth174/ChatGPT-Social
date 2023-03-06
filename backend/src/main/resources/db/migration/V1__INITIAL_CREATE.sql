CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  email VARCHAR(50) UNIQUE NOT NULL,
  first_name VARCHAR(25),
  last_name VARCHAR(25),
  phone_number VARCHAR(15),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMP,
  CHECK (email = LOWER(email))
);