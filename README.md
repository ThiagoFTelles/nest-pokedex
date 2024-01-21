<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Run in development
1. Clone the repository

2. Run
```
yarn install
```
3. You need to have the NestCLI installed
```
npm i -g @nestjs/cli
```
4. Up the database
```
docker-compose up -d
```
5. Clone the ```.env.template``` file and rename the copied file to ```.env```

6. Define your environment variables on ```.env``` file

7. Run the dev aplication
```
yarn start:dev
```
7. Rebuild the database with the seed
```
localhost:3000/api/v2/seed
```

## Stack
 * MongoDB
 * Nest

## Production Build
1. Create the ```.env.prod``` file
2. Fill the production env variables
3. Create the new image
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

## Tools
 * TablePlus
 * Docker Desktop
 * Postman
 * MongoDBCompass
 * Railway.app