const database = require('mongoose')

let baseURL = process.env.DB_URL;

const schema = new database.Schema(
 {
  name: String,
  number: String,
  date: Date
 }
);

const Contact = new database.model('Contact', schema)


database.connect(baseURL).catch(error =>
  {
   console.log("Connection impossible")
   console.log(error)
   process.exit();
  })


function Add(object) {
 return "naught"
}

function Get() {
 return  Contact.find({})
}
/*
function Delete(object) {
 return axios.delete(`${baseURL}/${object.id}`)
}

 delete: Delete,
 update: Update
 
function Update(id, object) {
 return axios.put(`${baseURL}/${id}`, object)
}
*/

export default  {
 add: Add,
 get: Get,
}
