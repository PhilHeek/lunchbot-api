import express from 'express';
const server = express();
const port = process.env.PORT || 3000;
import morgan from 'morgan';
import config from './config';
import bodyParser from 'body-parser';

server.use(morgan('dev'));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      //respond with 200
      res.send(200);
    }
    else {
    //move on
      next();
    }
});

require('./routes/router')(server, {});

server.use(function (req, res) {
  res.status(404).send({url: req.oriinalUrl + ' not found'});
});

server.listen(port, () => {
  console.log('lunchbot API server started on: ' + port);
});

module.exports = server;
