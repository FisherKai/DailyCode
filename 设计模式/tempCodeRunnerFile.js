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