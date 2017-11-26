### 准备开始
---
#### 学员反馈
    不太能跟上老师的节奏， 有时候听得懂， 有时候比较乱。

*** 老师 感觉越来越跟不上了

*** 这个服务器的session和h5的有什么区别

  proxy那一块还不是很懂
    npm 下载 request包，发请求的

    来自同一个服务器(没有跨域)的index.html
            -> 向同一个服务器发起请求 B
            -> 服务器B向服务器C发起请求
            -> 拿到C的response,将数据回写给index.html的response



  CORS中老师再讲一遍呗,总是看着不太明白
    
        男生+媒婆+女生

  老师能帮忙整理一下 这几天学的 关于vue的知识点么 感觉已经分不清楚什么是什么了
        node中的核心对象，除了http-> 其实也有少量关系
        webpack用的代理就是node编写的（使用）
        path的API会在未来项目中，会看到
        process.argv,env
        require/module.exports
        npm中的东西 vue中使用很多

  9999端口 F:\传智资料\传智学习\就业班\node.js\12-NODE基础-第4天-{ 跨域、NPM}\4-源代码\code\01_async_post_login_list\app.js:73 heros:heros1,username:userData.uname ^ TypeError: Cannot read property 'uname' of undefined at Server.http.createServer (F:\传智资料\传智学习\就业班\node.js\12-NODE基础-第4天-{ 跨域、NPM}\4-源代码\code\01_async_post_login_list\app.js:73:43) at emitTwo (events.js:106:13) at Server.emit (events.js:191:7) at HTTPParser.parserOnIncoming [as onIncoming] (_http_server.js:546:12) at HTTPParser.parserOnHeadersComplete (_http_common.js:99:23) 敲了一晚上 在案例一 卡了一晚上 然后运行老师的源码 发现这个错误 别人电脑运行源码没问题 后面的小伙伴运行也是这个问题 心态崩了
    学习:不要想js单线程一般，多学习异步的操作，不要阻塞后续代码执行

 希望老师多聊写面试技巧谢谢

 现在觉得有点填鸭式了,上课貌似能听懂,但是一天的知识量需要在晚自习时练完觉得很困难,总是要去核对老师的代码,每天落下一部分不会的内容,估计没几天我们就听不懂课也静不下心来了

 如何设置cookie那地方不太懂

 小饼干不是很清楚

 jsonp跨域再总结一下s
#### 复习

#### 今日重点
* NPM及node中的第三方包的查找机制
* express web应用框架

#### node中第三方包的查找机制
* 当前运行的01_encoding.js所在盘符C盘
* 逐级向上查找node_modules,直到C盘

#### 查找入口文件
* 1:包名文件夹下的package.json文件中的main属性
* 2:与包名同级，并且同名的.js文件
* 3:包名文件夹下的index.js
* 如果你完全听不懂我说的，想办法输出
    - `require.resolve('包名');`

#### package.json文件
* 整个数据是json格式
* name 代表着包的唯一名称,npm上搜索的就是name属性
* main 代表包的入口
* scripts是一个对象
    - 对象中的key就是命令的缩写  `npm run key`
    - 对象中的value就是命令

```javascript
    "scripts":{
        "test":"一堆命令",
        "dev":"一堆命令",
        "build":"一堆命令"
    }
```

#### NPM
* npm有两重含义
    - 1:npmjs的网站
        + 查看资源及对应的文档
        + 475000个js的包
            * 包含前端，引包使用的包
            * 包含后端，nodejs 使用require引入的包
    - 2:npm这个命令行工具

#### npm-cli命令
* 初始化包描述文件 `npm init [-y]`
    - 将文件夹名作为name属性的值

* 安装包
    - `npm install 包名@版本号 --save`
        + 记录依赖到package.json文件中的dependencies属性中
    - 记录依赖分类为(开发依赖)
        + `npm install 包名@版本号 --save-dev`
        + 记录依赖到package.json文件中的devDependencies属性中
* 恢复包
    - `npm install`
        + 如果是100个包有依赖记录，只删除了1个，检查100个中少了哪一个
        + 假设当前是100个包有依赖记录，但是由于分了2个类，由此我们可以按照类别来恢复
        + 假设各类别是50个依赖,只用检查50个缺少哪一个
    - 例子，删除开发依赖
        + 只恢复生产依赖
        + `npm install --production`
* 恢复包的总结
    - `npm install 包名 --save` -> `npm install --production`
    - `npm install 包名 --save-dev` -> `npm install`(--save和--save-dev都恢复)
* 简写形式
    - `npm install(i) 包名 --save(-S)`
    - `npm install(i) 包名 --save-dev(-D)`
* 卸载
    - `npm uninstall(un) 包名 -S`
        + `-S` 删除生产依赖
    - `npm un 包名 -D`
        + 删除开发依赖

* 查看包的信息
    - `npm info 包名`
    - 查看整个对象的versions
    - `npm i 包名@0.4.5 -S`

* npm install<command> -h 

* 开发依赖 -D(--save-dev)  是跟打包相关的依赖 gulp/webpack
* 生产依赖 -S(--save) 跟打包无关的依赖

### express
---
* 基于node的web应用框架

#### express介绍
---
#### express框架给我们做了什么
* 代码编写 req,res(优化这两个对象)
* req只读对象,提供了比较便捷的获取信息的方式
    - req.url
    - req.method
    - req.headers.cookie
        + `req.cookies`
    - 结合req.url获取查询字符串 使用核心url
        + `req.query`
    - 结合req.url获取path方式的参数 使用正则
        + `req.params`
* res只写操作对象
    - 重定向 res.writeHead(302,headers); res.end();
    - `res.redirect('地址');`
    - 以前设置响应content_type
        + res.send(html)
    - 直接模板渲染
        + res.render('./index.html',{数据对象})
    - 响应json对象 res.end(JSON.stringify({}))
        + `res.json({});`
* 框架中添加一些行为(中间件)
    - onload事件，来做一些事情
    - 不用记住事件名
        + 完全通过代码的执行顺序来加一些操作
        + app.use(第一件事)
        + app.use(第二件事)
* express保留了原来原生的函数，一切都可以正常使用，你也可以使用附加来的新函数，完成便捷的操作        

#### 启程helloworld
* 安装`npm i express -S`

#### 中间件
* 案例:
    - 猜猜我是谁？

* 总结
    - 继续打下一个菜 next()
    - 站着不动 既不next也不end -> 浏览器一直转
    - 当前这个菜打了就去吃饭 res.end(); -> 用户看到页面
    - 一路next但不end(); -> 404没有结果
    - 中间件:
        + app.use();
        + 中间的一件事
        + 在一次请求与响应的过程中发生的一件事
        + 中间件的顺序按代码的顺序来执行

#### next
* 小练习
    - 精忠报国

* `app.use(dir,fn)`
* dir->  '/xxx'
    - dir是为了选择性的调用不同的中间件
    - 如果匹配以后,该dir会作为标识从url中剔除出来
 

#### 中间件类别(了解)
* 应用级的中间件 `app.use(fn)`
* 路由级的中间件  `let router = express.Router();`
    - 前端路由 url上的 锚点值来判断
    - 后端路由 url + 请求方式
* 内置中间, 将内置中间件关联到应用中    
    - app.use(内置中间件)
    - 帮我们处理所有的静态资源文件的返回
* 第三方中间件 
    - session的功能
    - 快捷的解析post请求体数据
* 错误处理中间件 
    - 统一在express中处理错误

#### 路由中间件
* 后端路由 = url + 请求方式
* `let router = express.Router();`
    - router.请求方式('url',做什么事);

#### res扩展函数
```javascript
res.download()  下载文件
res.json()   响应json对象
res.jsonp()  配合jsonp
res.redirect()    重定向
res.send()     发送字符串数据自动加content-type
res.sendFile()  显示一个文件
res.sendStatus()  响应状态码
```

* json 在ajax的交互中，很常用的返回json对象
* redirect 重定向
* download 下载文件
* jsonp 跨域
* res.render 结合模板渲染html文件响应回去，其他静态资源则通过内置中间件


### 模板渲染
---
#### 使用art-template模板引擎
* 渲染一次
    - let str = template(文件,数据)
    - res.end(str);
* 配置一次
    - 每一次res.render(文件,数据)
* 下载
    - 1:`npm i express-art-template art-template -S`
    - 2: app.js 
        + 2.1:进行模板引擎的配置




#### 第三方中间件(post请求体的获取)
* req.on('data',data =>{data.toString();})
* req.body拿到了
* 1:安装中间件 `npm i body-parser -S`
* 2:通过app.use使用这个中间件的对象



#### 练习 我们的聊天室
* 如果可以下载，就下载玩玩包
* 如果不好下载，直接用老师的包

* index.html首页


#### 内置中间件
#### url上的参数
* 英雄列表
