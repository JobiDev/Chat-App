//hi :D sorry if my code sucks ass, this is like my second time ever using express, and first time using socket.io

const express = require('express');
const app = express();

const path = require('path');
const pubDir = path.join(__dirname,'public');

const http = require('http');
const server = http.createServer(app)

const { Server } = require('socket.io');
const io = new Server(server)

const port = 3000;

app.use('/',(req,res) => {
    res.sendFile(path.join(pubDir,'index.html'))
})

io.on('connection',(socket)=>{

    //Update the user count on join
    io.emit('user-count',io.engine.clientsCount)

    //Set the users name based off of their socket ID, then tell the client via socket.emit() what their name is.
    socket.username = `Anon#${socket.id.slice(0,6)}`;
    socket.emit('user-name',`Anon#${socket.id.slice(0,6)}`)

    //Send the message for a user joining the room.
    io.emit('message-send', { message:`Anon#${socket.id.slice(0,6)} Has joined the room.`, username:"*", color:"gray" });

    //When a user wants to send a message, relay it back to all clients. (io.emit sends a message to every client, socket.emit sends a message to a user.)
    socket.on('message-send',(message)=>{
        io.emit('message-send',message);
    })

    //Allows the client to tell the server their new username, this is used for the join & leave messages.
    socket.on('set-username',(data)=>{
        socket.username = data.new_username;
        io.emit('message-send', { message:`${data.old_username} is now known as ${data.new_username}`, username:"*", color:"gray" });
    })

    socket.on('disconnect',(data)=>{

        //Tell the message for leaving the room
        io.emit('message-send', { message:`${socket.username} Has left the room.`, username:"*", color:"gray" });

        //Update the user count on leave
        io.emit('user-count',io.engine.clientsCount)
    })
})

server.listen(port, '0.0.0.0', ()=>{
    console.log("Listening on:")
    console.log(`    http://localhost:${port}`)
})