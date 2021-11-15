const express = require('express');
const server = express();

const morgan = require('morgan');
const logger = morgan;

const cors = require('cors');
server.use(cors());
let contacts = [
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

server.use(express.json())

server.get('/persons', (request, response) => {
 response.json(contacts);
})


server.get('/persons/:id', (request, response) => {
 const id = parseInt(request.params.id);
 const contact = contacts.filter(element => element.id == id);
 if (contact.length > 0)
   {response.json(contact)} else {
    response.status(404).json(
     {error: "No contact has been found with such ID"}
    )
   }
})


server.delete('/persons/:id', (request, response) => {
 const id = parseInt(request.params.id);
 contacts = contacts.filter(element => element.id !== id);
 response.status(203).end()
 })


server.post('/persons', (request, response) => {
 try {

 if (Object.keys(request.body).length == 0) {
  response.status(400).end()
 } else {

  console.log(request.body);
  const object = {
   ...request.body,
   id: contacts.length + 1
  }

  if (!object.name) {
   response.status(400).json(
    {"error": "One has to have name"}
   )
  } else if (!object.number) {
   response.status(400).json(
    {"error": "One has to have a number"}
   )
  }

 if (contacts.filter(element => element.name == object.name).length == 0){
  contacts.push(object);
  response.status(203).end()
 }
 else {
  response.status(400).end()
 }}

}catch (error) {
  response.status(500).end()
 }

}
)


server.get('/info', (request, response) => {
 response.send(`<div><p>Phonebook has gotten ${contacts.length} contacts</p><p>${new Date()}</p></div>`)
})


const PORT = 3001;
server.listen(PORT, () => {
 console.log(`Application has been successfully deployed on ${PORT}. Date: ${new Date()}`)
})


server.use(logger(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}))
// hey! unpack them into their modules!
