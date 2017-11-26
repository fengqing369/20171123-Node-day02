const express = require('express');
let app = express();
//注册一个模板渲染引擎,当文件名为.art后缀，则使用这个模板
app.engine('html', require('express-art-template'));


//给express进行配置 view options 视图
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
// app.get('/', function (req, res) {
//     res.render('index.art', {
//         user: {
//             name: 'aui',
//             tags: ['art', 'template', 'nodejs']
//         }
//     });
// });
let router = express.Router();
router.get('/', (req,res)=>{
    //render的时候默认查找路径是当前目录下的views目录
    res.render('index.html',{
        name:'jack',age:'18'
    });
});
//加入到中间件队列中
app.use(router);

app.listen(8888,()=>{
    console.log('8888');
});