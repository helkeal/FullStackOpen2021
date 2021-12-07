const http = require('http')
const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const configuration = require('./utils/config.js')

const mongoUrl = configuration.URL;
mongoose.connect(mongoUrl);


const PORT = configuration.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})