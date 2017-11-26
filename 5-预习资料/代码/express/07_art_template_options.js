const express = require('express');
let app = express();
//注册一个模板渲染引擎,当文件名为.art后缀，则使用这个模板
app.engine('html', require('express-art-template'));


//给express进行配置 view options 视图
app.set('view options', {
    debug: process.env.NODE_DEV != 'production' , //生产模式, 要缓存，要压缩
    //缓存如果开启，修改了文件中的静态数据，则需要重启服务器
    rules:[{
         test: /\@@([\w\W]*?)@@/,  
         //*? 贪婪模式，代表匹配上一组后，就不再对整个文件内容进行匹配了
         //* 将整个html页面的字符串整体进行匹配
         use: function(match, code) {
            console.log(match); //匹配的信息
            console.log(code); //表示匹配上分组的字符串
            return {
                code: code,  //将name对应的值左输出
                output: 'escape',//方式xss攻击 raw 原生输出 false不输出
                //css   cross site scripting 跨站脚本攻击
            }
        }
    }],
    imports:{
        //模板在竞争的时候，我比较小，我逻辑少logicless
        myname:'宝宝',//导入变量
        reverse:function(value){ //导入函数 ，逻辑少
            return value.split('').reverse().join('');
        }
    }
});
let router = express.Router();
router.get('/', (req,res)=>{
    //render的时候默认查找路径是当前目录下的views目录
    res.render('index_options.html',{
        name:'<script>alert(1);</script>'
    });
});
//加入到中间件队列中
app.use(router);

app.listen(8889,()=>{
    console.log('8889');
});