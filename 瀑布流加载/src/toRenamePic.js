const fs = require('fs');
const path = require('path');
const p = path.join(path.resolve(__dirname, '../img'), '/');
pics = fs.readdirSync(p);
pics.forEach((element, index) => {
    console.log(element);
    var readStream = fs.createReadStream(p + element); // 被复制文件
    // 创建一个写入流
    var writeStream = fs.createWriteStream(path.join(path.resolve(__dirname, '../img1'), '/') + ("" + index + '.' + String(element).split('.')[1])); // 复制到的目标位置及文件
    // 读取流的内容通过管道流写入到输出流
    readStream.pipe(writeStream);
});