// WebSocket Client
var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
document.getElementsByTagName('head')[0].appendChild(script);
const socket = new WebSocket('wss://REPLIT-URL-HERE'); // YOUR REPLIT URL OR IP HERE
socket.addEventListener('open', function (event) {
 console.log('Connected to server')
 t = setInterval(function() {
 var result = document.getElementsByClassName("message")[0].innerHTML;
 var result2 = document.getElementsByClassName("username mr-1")[0].innerHTML;
 socket.send(result2 + result);
 }, 2000);
});
socket.addEventListener('message', function (event) {
 console.log('Message from server: ', event.data);
});
