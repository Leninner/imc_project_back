# IMC API

## Description

This is a project to calculate the IMC of a person.

## Requirements

- [Node.js](https://nodejs.org/en/) >= 18.14.0
- [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)
- [Docker](https://www.docker.com/)

## Installation

```bash
$ nvm use
$ npm ci
```

## Prepare the local database

In your local `.env file` put the following variables:

```bash
# Local development environment variables
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=admin
DATABASE_PASSWORD=admin
DATABASE_NAME=postgres
```

```bash
$ docker compose --env-file ./.env up -d
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
