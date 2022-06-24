let a = ['https://e-hentai.org/s/fc8359b383/2162341-1', 'https://e-hentai.org/s/0a5b3a6684/2162341-2', 'https://e-hentai.org/s/89e57f9ac6/2162341-3', 'https://e-hentai.org/s/752e791cfd/2162341-4', 'https://e-hentai.org/s/f42070236d/2162341-5', 'https://e-hentai.org/s/16207c6b32/2162341-6', 'https://e-hentai.org/s/8a38281407/2162341-7', 'https://e-hentai.org/s/d8f70f4072/2162341-8', 'https://e-hentai.org/s/be942d5014/2162341-9', 'https://e-hentai.org/s/ba406d48b9/2162341-10', 'https://e-hentai.org/s/1df2c2ed7e/2162341-11', 'https://e-hentai.org/s/21396fc485/2162341-12', 'https://e-hentai.org/s/58c2f3c31d/2162341-13', 'https://e-hentai.org/s/82961b92ef/2162341-14', 'https://e-hentai.org/s/9022dbf15f/2162341-15', 'https://e-hentai.org/s/b0c5f2f63f/2162341-16', 'https://e-hentai.org/s/09ff680314/2162341-17', 'https://e-hentai.org/s/88d77f82ee/2162341-18', 'https://e-hentai.org/s/ca0cc3f224/2162341-19', 'https://e-hentai.org/s/08bc8f1739/2162341-20', 'https://e-hentai.org/s/c49c343e06/2162341-21', 'https://e-hentai.org/s/0706fe8c21/2162341-22', 'https://e-hentai.org/s/eea0b24ba3/2162341-23', 'https://e-hentai.org/s/6050ef3818/2162341-24', 'https://e-hentai.org/s/fe27cfd600/2162341-25', 'https://e-hentai.org/s/34e609d01f/2162341-26', 'https://e-hentai.org/s/e6bfeb7b8b/2162341-27', 'https://e-hentai.org/s/c4f7f41668/2162341-28', 'https://e-hentai.org/s/bb358ab627/2162341-29', 'https://e-hentai.org/s/71aefe0cf7/2162341-30', 'https://e-hentai.org/s/5d8b58e6d2/2162341-31', 'https://e-hentai.org/s/a9df68ec8b/2162341-32', 'https://e-hentai.org/s/1584a532ee/2162341-33', 'https://e-hentai.org/s/42d8616e57/2162341-34', 'https://e-hentai.org/s/e2102e0b8c/2162341-35', 'https://e-hentai.org/s/3471851fc5/2162341-36', 'https://e-hentai.org/s/409179b4ce/2162341-37', 'https://e-hentai.org/s/40deb0df9e/2162341-38', 'https://e-hentai.org/s/f7644e16b3/2162341-39', 'https://e-hentai.org/s/f6159f9ab8/2162341-40']
/**
 * 获取图片的 base64 编码
 * @param image 图像对象
 * @return {string} 返回已编码的 base64数据
 */
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

/**
 * 单张图片下载
 * @param url 图像链接
 * @param downloadName 图片名称
 */
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

a.forEach((item,index)=>{
    downloadImage(item,`${index}.png`)
})