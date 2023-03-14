docker pull postgres:latest
docker run -d \
	--name askme \
	-e POSTGRES_PASSWORD=postgres \
    -e POSTGRES_DB=askme \
	-v pgdata:/var/lib/postgresql/data \
    -p 5432:5432 \
	postgres:latest