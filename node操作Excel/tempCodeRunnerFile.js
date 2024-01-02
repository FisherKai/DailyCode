const xlsx = require('node-xlsx');
const fs = require('fs');

var obj = xlsx.parse(__dirname + '/商户号信息总表.xlsx');
console.log(obj[0].data[1]);
// function trim(s) {
//     return s.replace(/(^\s*)|(\s*$)/g, "");
// }

// function dealArr(arr) {
//     for (let index = 0; index < arr.length; index++) {
//         // const element = arr[index];
//         if (arr[index] == '' || arr[index] == null || typeof (arr[index]) == undefined) {
//             arr.splice(index, 1);
//             index = index - 1;
//         }
//     }
//     return arr;
// }

// obj.forEach(item => {
//     let newArr = []
//     item.data && item.data.forEach(e => {
//         if (e[0]&&!e[0].includes('+-')) {
//             let arr = e[0].split('|');
//             arr.forEach((i, idx) => {
//                 arr[idx] = trim(i);
//             })
//             // console.log(arr);
//             e = arr;
//             newArr.push(arr);
//         }
//         // console.log(e);
//     });
//     if (newArr.length > 0) {
//         for (let index = 0; index < newArr.length; index++) {
//             newArr[index] = dealArr(newArr[index])
//         }
//         let xlsxObj=[{
//             name:'shee1',
//             data: newArr
//         }]
//         let buffer = xlsx.build(xlsxObj);
//         // console.log(new/Arr);
        
//         fs.writeFile(__dirname + '/test1.xlsx', buffer, function (err) {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//         });
//     }
// })
let res = [];
for (let index = 1; index < obj[0].data.length; index++) {
    const element = obj[0].data[index];
    const str = `pages/qrcode/index?city_code=${element[5]}`;
    if(element[5] && element[5] !=='/'){
        element[element.length] = str;
        res.push([str])
        // fs.writeFileSync('/Users/fisherkai/Desktop/my-code/DailyCode/node操作Excel/test.xlsx',str, { flag: 'a+' }, err => {
        //     console.log(err);
        // });
        // fs.writeFile('/Users/fisherkai/Desktop/my-code/DailyCode/test.txt', str, { flag: 'a+' }, err => {});
    }
}
console.log(res);

let xlsxObj=[{
    name:'shee1',
    data: res
}]
let buffer = xlsx.build(xlsxObj);
        fs.writeFile(__dirname + '/test1111.xlsx', buffer, function (err) {
    if (err) {
        console.log(err);
        return;
    }
});
 