// 检测是否支持缓存，且需要在宿主浏览器环境中
let isCacheSuppored = 'caches' in window;
console.log('是否支持缓存',isCacheSuppored); 

// 创建\初始化Cache
// 可以使用 open 方法创建一个具有 name 的缓存，这将返回 promise。如果缓存已经存在，则不会创建新的缓存。
// PS: 1、可以为同一个域添加多个缓存，可以通过 caches.keys() 访问。
//     2、创建的缓存只能在当前的源(域)访问，不能跨源(域)
caches.open('MyName').then(cache=>{
    console.log(cache)
})