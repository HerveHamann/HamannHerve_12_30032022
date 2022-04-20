# Project n°12: Sportsee 

## For OpenClassRoom's studing path as front-end developer

## Project's goal

This project is a front end project using back end server delivered by OpenClassRoom.

The goal of the project is to create the dashboard displaying sport informations (session duration, weight, activity...) of the user in multiples charts. 

For the technical side, the goal is to use API and mocked data (used in a switch system) to deliver the user data to the user's page rendered in various charts (from the recharts library).

## Project's tech


React 17.0  
Sass 1.49  
Recharts 2.1.9  
Jsdoc 3.6

## Project's Installation

Required:
Node 16.14 
npm 8.3.1

## Installation

### Back end

Clone the back end project : [P9-front-end-dashboard](https://github.com/HerveHamann/P9-front-end-dashboard).

Use the `npm install` command to install all the dependencies. 

### Front end

Clone the front end project :[Sport See](https://github.com/HerveHamann/HamannHerve_12_30032022).

Use the  `npm install` command to install all the dependencies. 

## Starting


### Back end

Run first the back end project by using the commmand:

`npm start`

The back end will run at port 3000.

### Front end

Run the front end project by using the commmand:

`npm start`

The front end will run at port 3001.

## API/Mocked data switch

You can switch data from API to Mocked data in the DataContext.js file by changing:

`const path = "http://localhost:3000"` to `const path = "http://localhost:3001"`

This will simulate an error to the fetch and use the Mocked data insteed of API data.

## jsdoc

You can also run the jsdoc by opening docs/index.html file in Live Server.

## credits

Autor: Hervé Hamann




