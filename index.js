const express = require('express')
const {createServer} = require('node:http')
const {join} = require('node:path')
const {Server} = require('socket.io')

const app = express()
const server = createServer(app)
const io = new Server(server)

io.on('connection',(socket)=>{
    socket.on('user-message',message=>{
        io.emit('message',message)
    })
})

app.get('/',(req,res)=>{
    return res.sendFile(join(__dirname,'public/index.html'))
})

server.listen(3000,()=>{
    console.log('Server is running on local host 3000')
})