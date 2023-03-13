create table likes (
  id SERIAL PRIMARY KEY,
  person_id INTEGER NOT NULL,
  post_id INTEGER NOT NULL,
  deleted BIT NOT NULL DEFAULT 0::bit,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMP,

  foreign key(person_id) references people
);