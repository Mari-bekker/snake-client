// creating empty global variable
let connection;

const setupInput = function (conn) {
  // assigning the local variable to the global one so it can be used everywhere. 
  connection = conn;
  const stdin  = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }

    if (key === 'w') {
      setInterval(function () {connection.write("Move: up");}, 1000);
    }

    if (key === 'd') {
      connection.write("Move: right");
    }

    if (key === 's') {
      connection.write("Move: down");
    }

    if (key === 'a') {
      setInterval(function () {connection.write("Move: left");}, 1000);
    }
  });

}

module.exports = { setupInput };
