;
(function(doc) {
    /**
     * 外层盒子 oWarpper
     * 列数 column
     * 间隙 gap
     */
    var WaterFall = function(warpper, opt) {
        this.oWarpper = document.querySelector('.' + warpper);
        this.column = opt.column;
        this.gap = opt.gap;

        console.log(this.oWarpper, this.column, this.gap);
    }

    window.WaterFall = WaterFall;
})(document)