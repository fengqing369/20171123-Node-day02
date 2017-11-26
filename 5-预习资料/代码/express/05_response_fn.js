'use strict';
const express = require('express');
const path = require('path');

// res.download()  
// res.json()  
// res.jsonp()  
// res.redirect()   
// res.send()  
// res.sendFile()  
// res.sendStatus()  


let app = express();
//创建路由对象
let router = express.Router();
//配置路由规则
// if(req.url == '/download' && req.method =='GET')
router.get('/download',(req,res)=>{
    res.download( path.resolve('../../readme.md') );  //内部包含end
})
.get('/json',(req,res)=>{
    //res.end(JSON.stringify({ name:'jack'}));
    res.json({    
        name:'jack'
    });  //内部包含end
})
.get('/jsonp',(req,res)=>{  //调用的时候需要传递?callback=xxxx
    res.jsonp({    
        name:'rose'
    });  //内部包含end
})
.get('/redirect',(req,res)=>{
    res.redirect('http://www.baidu.com');
    //res.writeHead(302,{ location:'http://www.baidu.com'}); res.end();
})
.get('/send',(req,res)=>{
    //隐藏res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
    res.send(`
            <i>呵呵</i>
            <ul>
                <li>湖北</li>
                <li>湖南</li>
            </ul>

        `);
    // res.end(`
    //         <i>呵呵</i>
    //         <ul>
    //             <li>湖北</li>
    //             <li>湖南</li>
    //         </ul>

    //     `);
})
//// res.sendFile()  
// res.sendStatus() 
.get('/sendFile',(req,res)=>{
    res.sendFile( path.resolve('./05_response_fn.js'));
})
.get('/sendStatus',(req,res)=>{
    res.sendStatus(500);
})

//将路由对象加入中间件中
app.use(router);

//开启监听
app.listen(8888,()=>{
    console.log('8888');
})