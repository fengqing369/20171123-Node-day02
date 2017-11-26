'use strict';
const http = require('http');

let server = http.createServer( (req,res)=>{
    res.end('node_server');
});

server.listen(8081,()=>{
    console.log('服务器启动在8081_node');
});


//使用express
//1:引入第三方对象
const express = require('express');
//2：创建服务器对象
let app = express();

//请求与响应的中发生的一件事，就是响应一个express_server
app.use( (req,res)=>{
    res.end('express_server');
});

//3:开启监听
app.listen(8082,()=>{
    console.log('服务器启动在8082_express')
})