const configuration = require('./utils/config.js');
      const cors    = require('cors'); 

const logger = require('./utils/logger.js')

const express = require('express');
      const server = express();
       server.use(express.json());
       server.use(cors);

const database = require('mongoose');
      database.connect(configuration.URL)
              .then(
               result => logger.info(`Successfully connected to the database`)
              )
              .catch(
               error => logger.error(error)
              );
              
 
