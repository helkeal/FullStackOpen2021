function info(information) {
  console.log(information);
}

function error(error) {

  console.log(Object.getOwnPropertyNames(error))
  console.error(error.message)

}

module.exports = {
 info,
 error
}
