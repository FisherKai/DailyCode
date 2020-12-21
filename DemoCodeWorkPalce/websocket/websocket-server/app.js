// 1、导入nodejs-websocket包
const ws = require('nodejs-websocket');
const PORT = 3000;

// 2、创建一个server
// connect 每次有用户链接该函数都会被执行并创建一个connect对象
const server = ws.createServer(connect => {
    console.log(`有用户链接上来了`);
    connect.on('text',data=>{
        console.log(`接收到用户数据${data}`);
        // 返回发送数据
        connect.send(data.toUpperCase());
    });

    connect.on('close',(code,reason)=>{
        console.log(`${code}${reason}`);
    });

    connect.on('error',(error)=>{
        console.log(`${error}`);
    });
});

server.listen(PORT,()=>{
    console.log(`websocket启动成功，监听了${PORT}端口`);
})