const xlsx = require('node-xlsx');
const fs = require('fs');

var obj = xlsx.parse(__dirname + '/test.xlsx');
console.log(obj,obj[0].data);
function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
}

function dealArr(arr) {
    for (let index = 0; index < arr.length; index++) {
        // const element = arr[index];
        if (arr[index] == '' || arr[index] == null || typeof (arr[index]) == undefined) {
            arr.splice(index, 1);
            index = index - 1;
        }
    }
    return arr;
}

obj.forEach(item => {
    let newArr = []
    item.data && item.data.forEach(e => {
        if (e[0]&&!e[0].includes('+-')) {
            let arr = e[0].split('|');
            arr.forEach((i, idx) => {
                arr[idx] = trim(i);
            })
            // console.log(arr);
            e = arr;
            newArr.push(arr);
        }
        // console.log(e);
    });
    if (newArr.length > 0) {
        for (let index = 0; index < newArr.length; index++) {
            newArr[index] = dealArr(newArr[index])
        }
        let xlsxObj=[{
            name:'shee1',
            data:newArr
        }]
        let buffer = xlsx.build(xlsxObj);
        // console.log(new/Arr);
        
        fs.writeFile(__dirname + '/test1.xlsx', buffer, function (err) {
            if (err) {
                console.log(err);
                return;
            }
        });
    }
})