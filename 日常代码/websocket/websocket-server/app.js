// 1、导入nodejs-websocket包
const ws = require('nodejs-websocket');
const PORT = 8099;

// 2、创建一个server
// connect 每次有用户链接该函数都会被执行并创建一个connect对象
let count = 0;
const server = ws.createServer(connect => {
    count++;
    console.log(`用户${count}链接上来了`);
    broadcast(`用户${count}链接上来了`);
    connect.on('text', data => {
        console.log(`接收到用户数据${data}`);
        // 返回发送数据
        broadcast(data);
    });

    connect.on('close', (code, reason) => {
        console.log(`${code}${reason}`);
        count--;
        broadcast(`用户${count}断开链接`);
    });

    connect.on('error', (error) => {
        console.log(`${error}`);
    });
});

// 广播
// connections是全部活动用户的链接情况
function broadcast(msg) {
    server.connections.forEach(function (conn) {
        conn.send(msg)
    })
}

server.listen(PORT, () => {
    console.log(`websocket启动成功，监听了${PORT}端口`);
})