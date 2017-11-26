'use strict';
const express = require('express');
const bodyParser = require('body-parser')
let app = express();


// // parse application/x-www-form-urlencoded 处理键值对
app.use(bodyParser.urlencoded({ extended: false }));//  不扩展就用querystring 
//包含next();
// // parse application/json 解析json数据作为请求体数据
app.use(bodyParser.json()); //包含next();

//创建路由对象
let router = express.Router();

//当前的路由需要配合postman来测试
router.post('/login',(req,res)=>{
    let userData = req.body;
    console.log(userData);
    res.send(userData);
});

app.use(router);
app.listen(9999,()=>{
    console.log('9999');
})