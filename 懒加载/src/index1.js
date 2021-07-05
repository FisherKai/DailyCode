/**
 * 1.使用getBoundingClientRect来实现
 */
window.onload = function() {
    const imageList = document.querySelectorAll('img');

    window.addEventListener('scroll', (e) => {
        imageList.length > 0 && imageList.forEach((image) => {
            const imageTop = image.getBoundingClientRect().top;
            if (imageTop < window.innerHeight) {
                const data_src = image.getAttribute('data-src');
                image.src = data_src;
            }
        })
    })
}