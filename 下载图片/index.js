const getImageBase64 = image => {
    const canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    const ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0, image.width, image.height)
    // 获取图片后缀名
    const extension = image.src
        .substring(image.src.lastIndexOf('.') + 1)
        .toLowerCase()
    // 某些图片 url 可能没有后缀名，默认是 png
    return canvas.toDataURL('image/' + extension, 1)
}
const downloadImage = (url, downloadName) => {
    const link = document.createElement('a')
    link.setAttribute('download', downloadName)
    const image = new Image()
    // 添加时间戳，防止浏览器缓存图片
    image.src = url + '?timestamp=' + new Date().getTime()
    // 设置 crossOrigin 属性，解决图片跨域报错
    image.setAttribute('crossOrigin', 'Anonymous')
    image.onload = () => {
        link.href = getImageBase64(image)
        link.click()
    }
}

downloadImage(`https://2048.aaaimgs.com/images/2021/12/18/video2gif_20211119_150023a0a79.gif`,`img1`)