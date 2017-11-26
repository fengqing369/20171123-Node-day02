'use strict';
//1:引入express对象
const express = require('express');
//2:创建服务器对象
let app = express();
//4:猜猜我是谁

//行为会按照顺序来执行
app.use( (req,res,next)=>{
    console.log('我不会我做真钱呀！'); //肉肉
    next(); //内部提供的放行到下一个中间件的操作
});

//加入打汤

app.use( (req,res,next)=>{ //西红柿鸡蛋
    console.log('窃格瓦拉！');  //代码在上面
    next();
});


//3:监听端口
app.listen(8888,()=>{
    console.log('猜猜我是谁？'); //1
})
