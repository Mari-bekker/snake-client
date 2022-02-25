const IP = "localhost";
const PORT = 50541;
const stdin  = process.stdin;

const MOVEUP = "Move: up";
const MOVELEFT = "Move: left";
const MOVEDOWN = "Move: down";
const MOVERIGHT = "Move: right";

const MESSAGES = {
  f: "Say: ssssslopy move!",
  g: "Say: good game",
  l: "Say: long snake is long"
};

module.exports = {
  IP,
  PORT,
  stdin,
  MOVEUP,
  MOVEDOWN,
  MOVELEFT,
  MOVERIGHT,
  MESSAGES
};