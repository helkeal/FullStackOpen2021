const cors = require('cors');

const logger = require('../utils/logger.js')

const express = require('express');
      const server = express();
       server.use(express.json());
       server.use(cors);

const database = require('./routes.js');

 server.get('/api/blogs', (request, response) => {
  getAll()
          .then(data => response.json(data))
 })

 server.post('/api/blogs', (request, response) => {
   console.log('Request sent')
;   save(request.body)
           .then(status => response.status(203).end())
 })


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
 logger.info(`Server is running on ${PORT}`)
})
