/**
 * Command 命令模式
 * Command模式旨在将方法调用、请求和操作封装到单一对象中
 */
function CarManager() { }

CarManager.prototype.execute = function (name) {
    return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
};

CarManager.prototype.hello = function (text, name) {
    console.log(`hello ${text} ${name}!`);
};
var test=new CarManager();
test.execute('hello', 'world', 'yukai');