# Intersection Observer
    IntersectionObserver接口 (从属于Intersection Observer API) 提供了一种异步观察目标元素与其祖先元素或顶级文档视窗(viewport)交叉状态的方法。祖先元素与视窗(viewport)被称为根(root)。
    当一个IntersectionObserver对象被创建时，其被配置为监听根中一段给定比例的可见区域。一旦IntersectionObserver被创建，则无法更改其配置，所以一个给定的观察者对象只能用来监听可见区域的特定变化值；然而，你可以在同一个观察者对象中配置监听多个目标元素。

1. IntersectionObserver.disconnect()
   使IntersectionObserver对象停止监听工作。
2. IntersectionObserver.observe()
   使IntersectionObserver开始监听一个目标元素。
3. IntersectionObserver.takeRecords()
   返回所有观察目标的IntersectionObserverEntry对象数组。
4. IntersectionObserver.unobserve()
   使IntersectionObserver停止监听特定目标元素。
