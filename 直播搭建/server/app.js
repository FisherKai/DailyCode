// app.js
const NodeMediaServer = require('node-media-server');

 const config = {
  //  接受推过来的流量
   rtmp: {
     port: 1935,
     chunk_size: 60000,
     gop_cache: true,
     ping: 30,
     ping_timeout: 60
   },
  //  转发推流的信息
   http: {
     port: 8000,
     allow_origin: '*'
   }
 };
 
 var nms = new NodeMediaServer(config)
 nms.run();
 