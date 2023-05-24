# MoJo: A mood journaling application


# PROJECT SETUP

## INITIAL SETUP
cd MoJo/back-end

npm install

cd MoJo/front-end

npm install

### DB SETUP
psql

CREATE DATABASE mojo;

### DB SEEDING

cd MoJo/back-end

npm run db:reset

### START BACK-END SERVER
cd MoJo/back-end

npm run local

### START FRONT-END SERVER
cd MoJo/front-end

npm start


### Go to http://localhost:3000/ to view the application
