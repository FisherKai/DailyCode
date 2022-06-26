window.onload = function () {
    bindEvent();
}

function bindEvent() {
    const uploadEle = document.getElementById("upload");
    const containerEle = document.getElementById("container");

    uploadEle.addEventListener('change', function (e) {
        let file = e.target.files[0];

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
            var image = new Image();
            image.src = event.target.result;
            image.onload = function () {
                var canvas = document.createElement("canvas");
                var imageCanvas = canvas.getContext("2d");
                imageCanvas.drawImage(image, 0, 0);
                const img = canvasToImage(canvas);
                console.log(img);
                containerEle.appendChild(img);
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