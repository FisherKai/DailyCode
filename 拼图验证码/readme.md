# 拼图验证码
1) css在用calc计算时，运算符之间记得用` `隔开;
2) getBoundingClientRect()
   1) getBoundingClientRect用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性。ie5就开始支持
3)  css中的clamp函数
    1)  clamp() 函数的作用是把一个值限制在一个上限和下限之间，当这个值超过最小值和最大值的范围时，在最小值和最大值之间选择一个值使用。
4) background-blend-mode 属性定义了背景层的混合模式（图片与颜色）。
   1) 当设置了`background-image: linear-gradient(to right, green 0%, white 100%), url('logo.png');`这样类似的时候
   2) 当设置了`background-image和background-color`时
5) background-size属性规定背景图像的尺寸。
   1) length 设置背景图像的高度和宽度。 第一个值设置宽度，第二个值设置高度。 如果只设置一个值，则第二个值会被设置为 "auto"。
   2) percentage 以父元素的百分比来设置背景图像的宽度和高度。 第一个值设置宽度，第二个值设置高度。 如果只设置一个值，则第二个值会被设置为 "auto"。
   3) cover 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。背景图像的某些部分也许无法显示在背景定位区域中。
   4) contain 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。
6) background-position 属性设置背景图像的起始位置。
   1) 需要把 background-attachment 属性设置为 "fixed"，才能保证该属性在 Firefox 和 Opera 中正常工作。
7) box-shadow 属性向框添加一个或多个阴影。
   1) 语法 `box-shadow: h-shadow v-shadow blur spread color inset;`
8) transition 属性设置元素当过渡效果，四个简写属性为：transition-property、transition-duration、transition-timing-function、transition-delay
   1) 始终指定transition-duration属性，否则持续时间为0，transition不会有任何效果。
   2) 语法`transition: property duration timing-function delay;`