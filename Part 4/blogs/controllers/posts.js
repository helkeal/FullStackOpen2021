const logger = require("../utils/logger.js")
const configuration = require('../utils/config.js');

const database = require('mongoose');

      database.connect(configuration.URL)
              .then(
               result => logger.info(`Successfully connected to the database`)
              )
              .catch(
               error => logger.error(error)
              );


const schema = require('../models/post.js');
const Post = database.model('Post', schema);

function getAll(){
 return Post.find({})
}

function save(object) {
 const post = new Post(object);
 console.log('Post received')
 return post.save();
}

module.exports = {
 getAll,
 save
}
