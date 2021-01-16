# Getting Started with the recipes app

The project consists of a backend built on sinatra and frontend built on react.
To get start you will need to add a secret.env file to the base of the project where
docker-compose.yml file is.

The secret.env file should contain these values
```
ACCESS_TOKEN=XXXXXXX
SPACE_ID=XXXXXXX
ENVIRONMENT_ID=master
CHOKIDAR_USEPOLLING=true
RECIPES_BASE_URL=http://localhost:4567/api/v1
```

## Prerequisites
Docker

## Available Scripts

### Installing
clone this repo and in the root directory of the project run these commands
```
$ docker-compose build
$ docker-compose up
```

### Testing

#### Frontend
```
$ docker-compose run frontend yarn test
```

#### Backend
```
$ docker-compose run backend bundle exec rspec
```