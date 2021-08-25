// 真奥义之阻塞JS主线程之休眠
const sleep = (delay = 500) => {
    let t = Date.now();
    while (Date.now() - t <= delay) {
        continue;
    }
};

sleep(10000);
console.log(123);