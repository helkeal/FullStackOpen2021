import axios from 'axios';

let baseURL = "http://localhost:3001/persons"


function Add(object) {
 return axios.post(baseURL, object)
}

function Get() {
 return axios.get(baseURL)
}

function Delete(id) {
 return axios.delete(`${baseURL}/${id}`)
}

export default  {
 add: Add,
 get: Get,
 delete: Delete
}
