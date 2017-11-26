'use strict';
// 1:引入express对象
const express = require('express');
//2：创建服务器对象
const app = express();
//3; 监听端口
app.listen(8888,()=>{
    console.log('服务器启动在8888端口');
});

//地址栏输入什么？ /test/1/2/3/4/5/6/56/6
app.use('/test', (req,res,next)=>{
    res.writeHead(200,{
        'content-type':'text/html;charset=utf-8'
    })
    console.log(req.url); //  -> 地址栏/test -> /
        // -> 地址栏  /test/1/2/3  -> /1/2/3
    console.log('精');//忠报国
    res.write('精');//忠报国
    next();
})
app.use('/test/1', (req,res,next)=>{
    console.log('忠');//忠报国
    res.write('忠');
    next();
});
app.use('/test/1/2', (req,res,next)=>{
    console.log('报');//忠报国
    res.write('报');
    next();
});
app.use('/test/1/2/3', (req,res,next)=>{
    console.log('国');//忠报国
    res.end('国'); //拿页面-> 精忠报国
    next(); //404
});


// app.use('/huncai',(req,res,next)=>{
//     console.log('猪肉');//忠报国
//     next();
// })
// app.use('/huncai',(req,res,next)=>{
//     console.log('牛肉');//忠报国
//     next();
// });

// app.use('/sucai', (req,res,next)=>{
//     console.log('小白菜');//忠报国
//     next();
// });
// app.use('/sucai',  (req,res,next)=>{
//     console.log('生菜');//忠报国
//     next();
// });