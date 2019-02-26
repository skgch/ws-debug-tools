const WebSocket = require('ws');
 
const ws = new WebSocket('ws://localhost:8080');
 
ws.on('open', () => {
  console.log('onOpen: Connected.');
});
 
ws.on('message', data => {
  console.log(`onMessage: ${data}`);
});

process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => {
  const line = chunk.replace(/\r?\n/, '');
  ws.send(line);
});
