const express = require('express')
const app = express()
const port = 4000
const whitList=['http://localhost:3000']

app.use(function(req,res,next){
    let origin=req.headers.origin;
    if(whitList.includes(origin)){
        // 允许哪个源访问我
        res.setHeader('Access-Control-Allow-Origin',origin);
        // 支持的方法
        res.setHeader('Access-Control-Allow-Methods','PUT')
        // 允许携带cookie
        res.setHeader('Access-Control-Allow-Methods',true)
        // 预检的存活时间
        res.setHeader('Access-Control-Max-Age',6000)
    }
    next();
})

app.get('/getData', (req, res) => {
    console.log(req.headers)
    res.send('Hello World!');
})
app.listen(port, () => console.log(`Example app listening on port port!`))