import express from 'express';
const server = express();
const port = process.env.PORT || 3000;
import mongoose from 'mongoose';
import morgan from 'morgan';
import user from './models/user';
import config from './config';
import bodyParser from 'body-parser';
import yelp from 'yelp-fusion';

server.use(morgan('dev'));

// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect(config.mongoURI[server.settings.env], function (err, res) {
//   if(err) {
//     console.log('Error connecting to the database. ' + err);
//   } else {
//     console.log('Connected to Database: ' + config.mongoURI[server.settings.env]);
//   }
// });

const client = yelp.client(config.yelpApi.api_key);

const searchRequest = {
  latitude: config.location.latitude,
  longitude: config.location.longitude,
  term: config.yelpPreferences.term,
  sortby: config.yelpPreferences.sortby,
  open_now: config.yelpPreferences.open_now,
  limit: config.yelpPreferences.limit
};

client.search(searchRequest).then(response => {
  const restaurants = response.jsonBody.businesses;
  const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
  console.log('restaurant name:', restaurant.name);
}).catch(e => {
  console.log(e);
});



server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//router
//require('./api/routes/router')(server, {});

//populate.populate();

server.use(function (req, res) {
  res.status(404).send({url: req.oriinalUrl + ' not found'});
});

server.listen(port, () => {
  console.log('lunchbot API server started on: ' + port);
});

module.exports = server;
