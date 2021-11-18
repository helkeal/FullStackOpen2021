const database = require('mongoose');


const password = process.argv[2];
const url = `mongodb+srv://helkeal:${password}@helgen.zgjsh.mongodb.net/site?retryWrites=true&w=majority`;

const schema = new database.Schema(
 {
  name: String,
  number: String,
  date: Date
 }
);

const Contact = new database.model('Contact', schema)


  database.connect(url).catch(error =>
  {
   console.log("Connection impossible")
   console.log(error)
   process.exit();
  })


if (process.argv.length >= 4) {
  // connects, adds a contact

  const contact = new Contact(
   {
    name: process.argv[3],
    number: process.argv[4],
    date: new Date()
   }
  )

  contact.save().then(result => {
   console.log(`Saved ${process.argv[3]} with number of ${process.argv[4]}`)
   database.connection.close()
  })


} else if (process.argv.length == 3) {
 // retrivies the database

 Contact.find({}).then(
  result => {
   console.log("phonebook");
   result.map(element => console.log(element.name, element.number))
   database.connection.close()
  }
 )

}
