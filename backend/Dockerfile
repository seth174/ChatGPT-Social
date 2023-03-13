FROM openjdk:17
ARG JAR_FILE=./target/chatGPTSocial-0.0.1-SNAPSHOT.jar app.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]