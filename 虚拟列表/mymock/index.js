const Mock = require('mockjs');
const express = require('express');
const app = express();

app.all('*', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

function generatorList(num) {
    return Mock.mock({
        [`list|${num}`]: [{
            'id|+1': 1,
            title: "@ctitle(15,25)",
            image: Mock.Random.image(),
            reads: "@natural(0,9999)",
            from: "@ctitle(3,10)",
            date: "@date('yyyy-MM-dd')"
        }]
    })
}
app.get('/data', function (req, res) {
    const { num } = req.query;
    return res.send(generatorList(num));
})

app.listen(4000, function () {
    console.log(`启动在4000端口`)
})