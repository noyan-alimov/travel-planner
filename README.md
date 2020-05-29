# Travel Planner App

This is a web app that helps users to plan their travel

## What it does

- Receives user input, the city where they want to travel and the date when they depart
- Outputs the weather for the day of departure, the photo of the city, and top tourist attractions of this city including their names and ratings

## How to use

Clone the project and then run to use the app

```bash
npm install
npm run build-prod
npm start
```

To test

```bash
npm test
```

To use in development mode run these 2 commands in 2 different terminals

```bash
npm run build-dev
npm start
```

## API(s) used

1. (http://www.geonames.org/)[GeoNames] - To input the name of the city and output latitude and longitude
1. (https://www.weatherbit.io/)[WeatherBit] - To input latitude and longitude and output weather information
1. (https://pixabay.com/)[Pixabay] - To input the name of the city and output an image of it
1. (https://developers.google.com/places/web-service/search)[Google Maps] - To input the name of the city and output top tourist attractions

## Built with

- **Sass** - preprocessor to be compiled into CSS
- **Webpack** - asset management
- **Babel** - JavaScript compiler
- **Node.js** - JavaScript runtime
- **Express.js** - Server framework for Node.js
- **Jest** - testing unit
- **Service Workers** - to enable offline capability
