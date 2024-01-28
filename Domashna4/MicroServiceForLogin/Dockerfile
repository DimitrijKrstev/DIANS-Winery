# Use an official Maven image as the base image
FROM maven:3.8.4-openjdk-17-slim AS build
# Set the working directory in the container
WORKDIR /app
# Copy the pom.xml and the project files to the container
COPY pom.xml .
COPY /src ./src
# Build the application using Maven
RUN mvn package -DskipTests
# Use an official OpenJDK image as the base image
FROM openjdk:17-jdk-slim
# Set the working directory in the container
WORKDIR /app
# Copy the built JAR file from the previous stage to the container
COPY --from=build /app .
# Set the command to run the application
CMD ["java", "-jar", "target/MicroServiceForLogin-0.0.1-SNAPSHOT.jar"]
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"
EXPOSE 8086