let express = require("express"),
    http = require("http"),
    fs = require("fs"),
    path = require('path'),
    app = new express();
let multer = require('multer');
const PORT = 3000;

app.get('/download', (req, res, next) => {
    let fileName = '1.xls',
        pathName = './file/' + fileName;
    // 文件的大小
    let size = fs.statSync(pathName).size;
    let stream = fs.createReadStream(pathName);
    res.writeHead(200, {
        'Content-Type': 'application/force-download',
        'Content-Disposition': 'attachment; filename=' + fileName,
        'Content-Length': size
    })
    console.log(`size:${size}`);
    stream.pipe(res);
})

app.post('/upload', function (req, res, next) {
    console.log(req.body);
    console.log(req.files);
});

// 添加对静态资源的访问
app.use(express.static(path.join(__dirname)))

app.listen(PORT);
console.log(`正在监听${PORT}端口`)