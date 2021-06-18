const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: {origin: '*'}});
const port = process.env.PORT || 3080;

server.listen(port, () => {
    console.log(`Socket Server running on port: ${port}`);
}); 

const users = [];

io.on('connection', async (socket) => {
    
    await socket.on('username', (username) => {
        users[username] = socket.id;        
        console.log(users);
    });    

    await socket.emit('users', users);
});