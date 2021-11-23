const database = require('mongoose');

const Schema = new database.Schema(
 {title: String,
  author: String,
  url: String,
  likes: Number}
)

module.export = {
 Schema
}
