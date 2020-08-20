/**
 * 单例模式
 * 只被实例化一次，若实例已存在，则返回该对象的引用
 * PS：单例模式在多线程的 应用场合下必须小心使用。如果当唯一实例尚未创建时，有两个线程同时调用创建方法，
 * 那么它们同时没有检测到唯一实例的存在，从而同时各自创建了一个实例， 这样就有两个实例被构造出来，从而
 * 违反了单例模式中实例唯一的原则。 解决这个问题的办法是为指示类是否已经实例化的变量提供一个互斥锁(虽然这样会降低效率)。
 * 优点： 
    1.在单例模式中，活动的单例只有一个实例，对单例类的所有实例化得到的都是相同的一个实例。这样就 防止其它对象对自己的实例化，
    确保所有的对象都访问一个实例 
    2.单例模式具有一定的伸缩性，类自己来控制实例化进程，类就在改变实例化进程上有相应的伸缩性。 
    3.提供了对唯一实例的受控访问。 
    4.由于在系统内存中只存在一个对象，因此可以 节约系统资源，当 需要频繁创建和销毁的对象时单例模式无疑可以提高系统的性能。 
    5.允许可变数目的实例。 
    6.避免对共享资源的多重占用。 
 *  缺点： 
    1.不适用于变化的对象，如果同一类型的对象总是要在不同的用例场景发生变化，单例就会引起数据的错误，不能保存彼此的状态。 
    2.由于单利模式中没有抽象层，因此单例类的扩展有很大的困难。 
    3.单例类的职责过重，在一定程度上违背了“单一职责原则”。 
    4.滥用单例将带来一些负面问题，如为了节省资源将数据库连接池对象设计为的单例类，可能会导致共享连接池对象的程序过多而出现
    连接池溢出；如果实例化的对象长时间不被利用，系统会认为是垃圾而被回收，这将导致对象状态的丢失。 
 */
// 懒汉模式 在多线程中会存在问题
var mySingleton = (function () {
    // 保存实例的引用
    var instance;

    function init() {
        var privateVar1 = 'privateVar1';
        function privateFun() {
            console.log('i am a private function');
        }

        return {
            publicVar1: 'publicVar1',
            publicFun: function () {
                console.log('i am a public function');
            },
            getPrivateFunAndVar() {
                privateFun();
                console.log(`privateVar1 is ${privateVar1}`);
            }
        }
    }
    // 返回实例
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

// 饿汉模式
var mySingleton = (function () {
    // 保存实例的引用
    var instance = new init();

    function init() {
        var privateVar1 = 'privateVar1';
        function privateFun() {
            console.log('i am a private function');
        }

        return {
            publicVar1: 'publicVar1',
            publicFun: function () {
                console.log('i am a public function');
            },
            getPrivateFunAndVar() {
                privateFun();
                console.log(`privateVar1 is ${privateVar1}`);
            }
        }
    }
    // 返回实例
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();
