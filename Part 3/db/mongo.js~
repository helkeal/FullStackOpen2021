const database = require('mongoose');


const password = process.argv[2];
const url = `mongodb+srv://helkeal:${password}>@c1.zgjsh.mongodb.net/C1?retryWrites=true&w=majority`;


console.log(password, url)


if (process.argv.length >= 4) {
  // connects, adds a contact
  console.log("In development")

} else if (process.argv.length == 3) {
 // retrivies the database
  database.connect(url).catch(error =>
  {
   console.log("Connection impossible")
   console.log(error)
   process.exit();
  })
  console.log("In development")

}
