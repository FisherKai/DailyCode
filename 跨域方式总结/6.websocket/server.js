const express = require('express')
const app = express()
const port = 3000;
let webSocket=require('ws');
let wss=new webSocket.Server({port:port});

wss.on('connection',function(ws){
    ws.on('message',function(data){
        console.log(data);
    })
    ws.send('hello yukai')
})
