# Stage 1: Build the JAR file
FROM maven:3-openjdk-17-slim AS build

WORKDIR /app

COPY pom.xml .

COPY src src

RUN mvn clean package -DskipTests


# Stage 2: Create the Docker image

FROM openjdk:17-alpine

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
