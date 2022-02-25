const IP = "localhost";
const PORT = 50541;
const stdin  = process.stdin;

const MOVEUP = "Move: up";
const MOVELEFT = "Move: left";
const MOVEDOWN = "Move: down";
const MOVERIGHT = "Move: right";

const messages = {
  f: "Say: ssssslopy move!",
  g: "Say: good game"
}

module.exports = {
  IP,
  PORT,
  stdin,
  MOVEUP,
  MOVEDOWN,
  MOVELEFT,
  MOVERIGHT
};