const { stdin, MOVEDOWN, MOVELEFT, MOVEUP, MOVERIGHT } = require("./constants");
// creating empty global variable
let connection;

const setupInput = function (conn) {
  // assigning the local variable to the global one so it can be used everywhere. 
  connection = conn;
  //const stdin  = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function () {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }

    if (key === 'w') {
      connection.write(MOVEUP);
    }

    if (key === 'd') {
      connection.write(MOVERIGHT);
    }

    if (key === 's') {
      connection.write(MOVEDOWN);
    }

    if (key === 'a') {
      connection.write(MOVELEFT);
    }

    if (key === 'f') {
      connection.write("Say: ssssslopy move!");
    }

    if (key === 'g') {
      connection.write("Say: good game");
    }
  });

}

module.exports = { setupInput };
