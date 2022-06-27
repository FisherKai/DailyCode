window.onload = function () {
    bindEvent();
}

function bindEvent() {
    const uploadEle = document.getElementById("upload");
    const containerEle = document.getElementById("container");

    uploadEle.addEventListener('change', function (e) {
        let file = e.target.files[0];
        console.log(file);

        // file 转 img
        // const reader = new FileReader();
        // reader.readAsDataURL(file);//读取图像文件 result 为 DataURL, DataURL 可直接 赋值给 img.src
        // reader.onload = function (event) {
        //     var img = document.createElement("img");
        //     img.src = event.target.result;//base64
        //     containerEle.appendChild(img);
        // }

        // file 转 canvas
        var reader = new FileReader();
        reader.readAsDataURL(file);//读取图像文件 result 为 DataURL, DataURL 可直接 赋值给 img.src
        reader.onload = function (event) {
            var image = document.createElement("img");;
            image.src = event.target.result;
            // containerEle.appendChild(image);
            image.onload = function () {
                var canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;
                var imageCanvas = canvas.getContext("2d");
                imageCanvas.drawImage(image, 0, 0,image.width,image.height);
                imageCanvas.fillStyle = "red";
                imageCanvas.textBaseline = "middle";
                imageCanvas.fillText("仅供烟台入户使用", image.width/2, image.height/2);
                // const img = canvasToImage(canvas);
                containerEle.appendChild(canvas);
            }
        }
    })
}

/**
 * @param {*} canvas 
 */
function canvasToImage(canvas) {
    var image = document.createElement("img");
    image.src = canvas.toDataURL("image/*");//base64
    return image;
}