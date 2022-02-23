const net = require("net");

// establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // on the event of the client recieving data from the server, console log the data recieved. 
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting...");
connect();