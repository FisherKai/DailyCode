/**
 * Mediator(中介者)模式
 */

var mediator = (function () {
    //  定义可被广播或者监听的topics
    var topics = {};

    // 定义订阅，提供一个回调函数，一旦topics被广播就执行该回调
    var subscribe = function (topic, fn) {
        if (!topics[topic]) {
            topics[topic] = [];
        }

        topics[topic].push({
            context: this,
            callBack: fn
        })

        return this;
    }

    // 定义发布/广播事件
    var publish = function (topic) {
        var args;

        if (!topics[topic]) {
            return false;
        }

        args = Array.prototype.slice.call(arguments, 1);

        for (var i = 0, l = topics[topic].length; i < l; i++) {
            var subscription = topics[topic][i];
            subscription.callBack.apply(subscription.context, args);
        }

        return this;
    }

    // 暴露接口
    return {
        Publish: publish,
        Subscribe: subscribe,
        InstallTo: function (obj) {
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    }
})();