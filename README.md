# node2study
my notes on learning nodejs

#### 1. node的基本概述

单线程、非阻塞I/O（non-blocking I/O）、事件驱动（event-driven）

善于I/O，不善于计算

```javascript
注意：
1. Node最擅长的就是任务调度，如果你的业务有很多的CPU计算，实际上也相当于这个计算阻塞了这个这个单线程，就不适合Node开发。
2. 当应用程序需要大量并发的I/O，而在客户端发出响应之前，应用程序内部并不需要进行非常复杂的处理的时候，Node非常适合。例如：用户表单收集、考试系统、聊天室、图文直播、提供JSON的API、Web Socket。
```



#### 2. http模块

- createServer()：返回一个服务器实例，接受一个回调函数callback(req, res)，回调里最后必须结束：res.end()。

- writeHander(statusCode, options)：设置响应头

- setHeader(name, value)：设置一个响应头



#### 3. url模块

- queryString()：parse、stringily
- parse(url)：解析请求路径，设置第二个参数为true可以格式化?之后的查询字符串



#### 4. fs模块

- readFile(fileName, charset, callback)：读取文件

- madir(path, callback)：创建文件夹

- stat(path, callback)：检测状态，返回obj对象，可判断是文件文件夹等等状态

- readdir(path, callback)：读取文件目录，得到包括文件和文件夹

- ```javascript
  fs.readdir('./etc/', function(err, files) {
    var directoryNameArr = [];
  	(function interator(i) { // 利用迭代器巧妙的把异步变成同步
      if (i == directoryNameArr.length) {
        console.log('this is all directoryName: ' + directoryNameArr);
      }
      fs.stat('./etc/' + files[i], function(err, stats) {
        if (stats.isDirectory()) {
          directoryNameArr.push(files[i]);
        }
        interator(i + 1);
      });
    })(0)
  }
  ```

  

