# 平滑滚动

## 主要依靠scroll-behavior: smooth; 

### scroll-behavior 作用在根html上

  1) `当用户手动导航或者 CSSOM scrolling API 触发滚动操作时，CSS 属性 scroll-behavior 为一个滚动框指定滚动行为，其他任何的滚动，例如那些由于用户行为而产生的滚动，不受这个属性的影响。在根元素中指定这个属性时，它反而适用于视窗。`
  2) 值
     1) auto 滚动框立即滚动。
     2) smooth 滚动框通过一个用户代理预定义的时长、使用预定义的时间函数，来实现平稳的滚动，用户代理应遵循其平台的约定，如果有的话。
