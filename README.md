# Thryv John Self Challenge - Task Manager API 

This is a Task Manager API built with NestJS. It provides endpoints for managing tasks, users, notifications and authentication. And I try to implement the best practices in the development of the API, including the use of Unit and interation testing,  DTOs, services, controllers, repositories, guards, interceptors, middlewares, etc.

I try to implement AWS services in the project as follow:

1. `AWS S3` for file storage. 
2. `AWS EC2` and `AWS AWS Elastic Beanstalk` and  for hosting the API.
3. `AWS RDS` for database storage.
4. `AWS DynamoDB` for notifications storage.
5. `SOCKETS` for real-time notifications.

## Table of Contents

- [Installation](#installation)
- [Running the app](#running-the-app)
- [Test](#test)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/jmicheldelibua/thryv-john-delibua-self-challenge.git
   cd task-manager

2. Install dependencies:

`npm install`

3. Copy the .env.example file to .env and fill in the required environment variables:

`cp .env.example .env`

## Running the app

1. Start the development server:
 `npm run start:dev`

2. Start the production server:

`npm run start:prod`

## Test

1. Run unit tests:

`npm run test`

2. Run end-to-end tests:

`npm run test:e2e`

3. Run test coverage:

`npm run test:cov`


## Environment Variables
- **APP_PORT**: The port on which the application will run.
- **NODE_ENV**: The environment in which the application is running (e.g., development, production).
- **DB_HOST**: The database host.
- **DB_DATABASE**: The database name.
- **DB_USERNAME**: The database username.
- **DB_PASSWORD**: The database password.
- **DB_PORT**: The database port.
- **DB_TYPE**: The database type (e.g., mysql).
- **JWT_SECRET**: The secret key for JWT.
- **JWT_EXPIRES_IN**: The expiration time for JWT.
- **JWT_SALT_OR_ROUNDS**: The salt or rounds for bcrypt.
- **AWS_ACCESS_KEY_ID**: DynamoDB IAM AccessKey ID.
- **AWS_SECRET_ACCESS_KEY**: DynamoDB IAM secrets.
- **AWS_REGION**: DynamoDB region.



## API Documentation
The API documentation is available at `/docs` when the server is running.

## License
This project is licensed under the MIT License.