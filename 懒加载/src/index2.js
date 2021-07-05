window.onload = function() {
    const imageList = document.querySelectorAll('img');
    const observer = new IntersectionObserver((entries) => {
        entries && entries.forEach((entry) => {
            /**
             * entry.isIntersecting 元素是否到了可视区域
             */
            if (entry.isIntersecting) {
                // 获取图片对象
                const image = entry.target;
                const data_src = image.getAttribute('data-src');
                image.src = data_src;
                // 加载完成一次后就不必要再监听了
                observer.unobserve(image);
                console.log('触发');
            }
        })
    });

    imageList && imageList.forEach(image => {
        observer.observe(image);
    })
}