const { connect } = require('./client');
const { setupInput } = require("./input");

console.log("Connecting...");
const conn = connect();

//connection passed as a parameter into the function.
setupInput(conn);