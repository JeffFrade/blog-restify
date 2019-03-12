
const error = (error, msg, rejectedPromise) => {
  console.error(error);
  rejectedPromise({ error: msg })
}

module.exports = {
  errorHandler: error
}
