# Stage 1: Build
FROM node:latest AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code to the working directory
COPY . .

# Install dependencies
RUN yarn install

EXPOSE 3001

# Run the app when the container launches
CMD ["yarn", "dev"]