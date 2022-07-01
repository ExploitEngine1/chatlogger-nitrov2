const express = require('express')
const app = express()
const server = require('http').createServer(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server:server });
wss.on('connection', function connection(ws) {
console.log('LeetPlayer - Connected!');
ws.send('Leet-Speler connected');
ws.on('message', function incoming(message) {
console.log('received: %s', message);
wss.clients.forEach(function each(client) {
if (client !== ws && client.readyState === WebSocket.OPEN) {
client.send(message);
}});});});
app.get('/', (req, res) => res.send('WebSocketServer is online!'))
server.listen(3000, () => console.log(`Lisening on port :3000`))