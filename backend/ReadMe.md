Steps to running this thing on docker:\
    <ul>
        <li>docker build -t app.jar . this will look at the Dockerfile run it. This file gets the last build and makes it into a container. Use mvn install to get latest build</li>
        <li>docker-compose up -d this runs the docker compose file. The file starts the be and the db. The file looks for the image called app.jar which we just built</li>
        <li>The volume is saved under pgdata</li>
    </ul>
 