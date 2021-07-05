;
(function (doc) {
    /**
     * 外层盒子 oWarpper
     * 列数 column
     * 间隙 gap
     */
    var WaterFall = function (warpper, opt) {
        this.oWarpper = document.querySelector('.' + warpper);
        this.column = opt.column;
        this.gap = opt.gap;
        this.pageNum = 0;
        this.pageSize = 0;
        this.heightArr = [];
        this.itemWidth = (this.oWarpper.offsetWidth - (this.column - 1) * this.gap) / this.column;
    }

    WaterFall.prototype = {
        /**
         * 初始化
         */
        init: function () {
            this.bindEvent();
        },
        /**
         * 鼠标滚动事件
         */
        bindEvent: function () {

        },
        /**
         * 获取图片
         */
        getImgDatas: function () {

        },
        /**
         * 事件处理函数
         */
        scrollToBottom: function () {

        },
        /**
         * 渲染
         */
        renderList: function () {

        }
    }

    window.WaterFall = WaterFall;
})(document)