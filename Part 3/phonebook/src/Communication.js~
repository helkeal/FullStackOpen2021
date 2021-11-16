import axios from 'axios';

let baseURL = "http://localhost:3001/persons"


function Add(object) {
 return axios.post(baseURL, object)
}

function Get() {
 return axios.get(baseURL)
}

function Delete(object) {
 return axios.delete(`${baseURL}/${object.id}`)
}

function Update(id, object) {
 return axios.put(`${baseURL}/${id}`, object)
}

export default  {
 add: Add,
 get: Get,
 delete: Delete,
 update: Update
}
