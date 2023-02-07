docker pull postgres:latest
docker volume create postgresChatGPT
docker run -d \
	--name ChatGPT \
	-e POSTGRES_PASSWORD=postgres \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
	-v postgres:/var/lib/postgresql/data \
    -p 5432:5432 \
	postgres:latest