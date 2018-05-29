import express from 'express';
const server = express();
const port = process.env.PORT || 3000;
import morgan from 'morgan';
import user from './models/user';
import config from './config';
import bodyParser from 'body-parser';
import yelp from 'yelp-fusion';

server.use(morgan('dev'));

const router = require('./routes/router')(server, {});

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(function (req, res) {
  res.status(404).send({url: req.oriinalUrl + ' not found'});
});

server.listen(port, () => {
  console.log('lunchbot API server started on: ' + port);
});

module.exports = server;
