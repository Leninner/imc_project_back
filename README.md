# IMC API

## Description

This is a project to calculate the IMC of a person.

## Requirements

- [Node.js](https://nodejs.org/en/) >= 18.14.0
- [nvm]
- [docker]

## Installation

```bash
$ nvm use
$ yarn install --frozen-lockfile
```

## Prepare the local database

```bash
$ docker compose --env-file ./.env up -d
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
