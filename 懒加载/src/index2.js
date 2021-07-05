window.onload = function() {
    const imageList = document.querySelectorAll('img');
    // callback一般会触发两次。一次是目标元素刚刚进入视口（开始可见），另一次是完全离开视口（开始不可见）。
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