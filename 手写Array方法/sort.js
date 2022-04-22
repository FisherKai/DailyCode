Array.prototype._sort = function (fun) {
    let startIndex = 0, endIndex = this.length - 1, index = 0;
    for (startIndex = 0; startIndex < this.length - 1; startIndex++) {
        // console.log(this[startIndex], this[startIndex + 1]);
        console.log(fun(this[startIndex + 1], this[startIndex]));
        if (fun(startIndex + 1, startIndex) > 0) {
            arr_sort(this, startIndex + 1)
        } else {
            arr_sort(this, startIndex + 1, 0)
        }
    }
}
function arr_sort(arr, endIndex, type = 1) {
    for (let index = 0; index < endIndex; index++) {
        for (let idx = 0; idx < endIndex; idx++) {
            if (type === 1) {
                if (arr[idx] > arr[index]) {
                    [arr[index], arr[idx]] = [arr[idx], arr[index]]
                }
            } else {
                if (arr[idx] < arr[index]) {
                    [arr[index], arr[idx]] = [arr[idx], arr[index]]
                }
            }
        }

    }
}

let a = [5, 3, 2, 6, 11];
a._sort((a, b) => {
    return a - b;
});
console.log(a);