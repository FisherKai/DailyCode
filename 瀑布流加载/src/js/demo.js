;
(function(doc) {
    let oItems = doc.querySelectorAll('.wf-item'),
        oItemsLen = oItems.length,
        _arr = [];

    function init() {
        setImgPos();
    }

    function setImgPos() {
        for (let index = 0; index < oItems.length; index++) {
            const element = oItems[index];
            element.style.width = '232px';

            if (index < 5) {
                _arr.push(element.offsetHeight);
                element.style.top = 5;

                if ((index + 1) % 5 === 1) {
                    element.style.left = 0;
                } else {
                    element.style.left = index * (232 + 10) + 'px';
                }
            } else {
                let minIdx = getMinIdx(_arr);
                if (minIdx != -1) {
                    element.style.left = oItems[minIdx].offsetLeft + 'px';
                    element.style.top = (_arr[minIdx] + 10) + 'px';
                    _arr[minIdx] += (element.offsetHeight + 10);
                }
            }
        }
    }

    function getMinIdx(arr) {
        return [].indexOf.call(arr, Math.min.apply(this, arr));
    }

    window.onload = function() {
        init();
    }
})(document)