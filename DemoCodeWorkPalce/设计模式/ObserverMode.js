/**
 * 观察者模式
 * 本质为发布-订阅
 */
// 观察目标
function Subject() {
    let observers = [];
    return {
        // 添加观察者
        addObserver: function (observer) {
            console.log('push');
            observers.push(observer)
        },
        // 移除观察者
        removeObserver: function (observer) {
            console.log('remove');
            const id = observers.indexOf(observer);
            id !== -1 && observers.splice(id, 1);
        },
        // 通知观察者
        notifyObservers: function () {
            console.log("notify all the observers ");
            observers.forEach(observer => {
                observer.notify();
            })
        }
    }
}
// 观察者
function Observer(name) {
    let observerName = name;
    return {
        notify:function(){
            console.log(`${observerName} has been notified`);
        }
    }
}

// 代码测试
let sub1 = Subject(),
    ob1=Observer('ob1'),
    ob2=Observer('ob2');
sub1.addObserver(ob1);
sub1.addObserver(ob2);
sub1.notifyObservers();
sub1.removeObserver(ob1);
sub1.removeObserver(ob2);

