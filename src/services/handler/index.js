
const error = (error, msg, rejectedPromise) => {
  console.log(error);
  rejectedPromise({ error: msg })
}

module.exports = {
  errorHandler: error
}
