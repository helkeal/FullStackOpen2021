const express = require('express');
const server = express();

const contacts = [
    {
      "id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
];

server.get('/persons', (request, response) => {
 response.json(contacts);
})

const PORT = 3001;
server.listen(PORT, () => {
 console.log(`Application has been successfully deployed on ${PORT}. Date: ${new Date()}`)
})
