docker pull postgres:latest
docker volume create OpenAI
docker run -d \
	--name OpenAI \
	-e POSTGRES_PASSWORD=postgres \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -e POSTGRES_DB=OpenAI \
	-v postgres:/var/lib/postgresql/data \
    -p 5432:5432 \
	postgres:latest