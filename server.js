const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 });
console.log('Ws server is listening on port 8080.');
 
wss.on('connection', ws => {
  console.log('New client is connected.');
  ws.send('I am ws server. We are connected.');

  ws.on('message', message => {
    console.log(`received: ${message}`);
    ws.send(`I received your message "${message}".`);
  });
 
});
