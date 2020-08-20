/**
 * 观察者模式
 * 类似于为发布-订阅（publish/subscribe），但又与发布-订阅模式不一样
 * 与发布-订阅不同的是发布-订阅会采用主题/事件（topic/event）管道。主题/事件管道介于订阅对象和发布对象之间
 * 主题/事件管道允许定义自定义事件，传递自定义参数，更加灵活
 * 其主要目的就是避免订阅对象和发布对象之间产生依赖关系
 */
// 观察者模式
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
        notify: function () {
            console.log(`${observerName} has been notified`);
        }
    }
}

// 代码测试
let sub1 = Subject(),
    ob1 = Observer('ob1'),
    ob2 = Observer('ob2');
sub1.addObserver(ob1);
sub1.addObserver(ob2);
sub1.notifyObservers();
sub1.removeObserver(ob1);
sub1.removeObserver(ob2);

// publish/subscribe模式
// 定义publish
var pubsub = {};
(function (p) {
    // 定义topic和subUid
    var topics = {},
        subUid = -1;

    // 发布事件
    p.publish = function (topic, args) {
        if (!topics[topic]) {
            return false;
        }

        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;

        while (len--) {
            subscribers[len].func(topic, args);
        }

        return this;
    };

    // 订阅事件
    p.subscribe = function (topic, func) {
        if (!topics[topic]) {
            topics[topic] = [];
        }

        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });

        return token;
    };

    // 取消订阅事件
    p.unsubscribe = function (token) {
        for (const m in topics) {
            if (topics[m]) {
                for (let i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    }
})(pubsub);

// 定义subscribe
/**
 * 简单的消息记录器
 * 测试代码
 */
var messageLogger = function (topics, data) {
    console.log("Logging: " + topics + ": " + data);
};

var subscription = pubsub.subscribe('inbox/newMessage', messageLogger);

pubsub.publish('inbox/newMessage', 'hello world!');
pubsub.publish('inbox/newMessage', ['1', 2, 3]);


