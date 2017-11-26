'use strict';
const express = require('express');

//创建服务器
const app = express();
//创建路由对象
let router  = express.Router();// 路由级中间件
//配置路由规则
router.get('/1',(req,res)=>{
    res.end('i am 1');
});

//app.use第一个参数是仅仅前面部分，匹配上了标识就可以执行
//router.get要求请求方式与url严格匹配才行
router.get('/2',(req,res)=>{
    res.end('i am 2');
});

//将配置好规则的路由对象，加入到中间件的队列中
app.use(router); //app.use 表示，不管地址栏是什么url，都执行这个中间件。
//中间件内部路由中间件，去根据url及请求方式来做不同的行为
//注意:先匹配中间件，再匹配路由对象中的路由规则
app.listen(8888,()=>{
    console.log('8888启动了');
});