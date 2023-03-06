create table models(
	id serial primary key,
	name varchar(50) unique not null,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMP
);

create table requests(
	id serial primary key,
	prompt varchar(500) not null,
	max_tokens integer not null,
	temperature real not null,
	model_id serial not null,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMP,
	foreign key(model_id) references models,
	constraint unique_request UNIQUE (prompt, max_tokens, temperature, model_id)

);