## 同源策略

协议 域名 端口 同域

## 不支持跨域

cookie LocalStorage
DOM元素的同源策略--iframe
ajax 也不支持跨域

## 实现跨域

* jsonp
jsonp是使用方法回调的原理.
在网页里, 你如果引入其他网页的js, 那这个页面的js是可以调用你网页的代码的直接请求js 和 请求的动态页面(jsp, php, aspx)里输出的javascript代码 效果一样.
jsonp请求不是Ajax请求，是一般的get请求，由script标签模拟。
基本步骤：
    1. 浏览器端动态生成script标签来请求后台接口（callback=jp01），并且定义好返回的处理响应数据的回调函数
    2. 服务端接受数据后返回一个立即执行函数，并把数据放在立即执行函数里 jp01&&(js01(){"xxxx"})()
    3. 浏览器回调函数调用
缺点：
    只能支持get请求；
    不安全 xss攻击
* cors
用在服务端

* postMessage
* document.domain 一般用于父域与子域进行通信
* window.name
* location.hash
* http-proxy
* nginx
* websocket
