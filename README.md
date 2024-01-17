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

## Tools
 * TablePlus
 * Docker Desktop
 * Postman