/**
 * Factory (工厂模式)
 * Factory提供一个通用的接口来创建对象，我们可以指定我们所希望创建的工厂对象的类型。
 * 何时使用Factory：
 * ·当对象或组件设置涉及高复杂性时
 * ·当需要根据所在不同环境轻松生成对象的不同实例时
 * ·当处理很多共享相同属性的小型对象或组件时
 * ·在编写只需要满足一个API契约的其他对象的实例对象时。对于解耦是很有用的。
 */
// eg:
function Car(opt) {
    // 默认值
    this.doors = opt.doors || 4;
    this.state = opt.state || 'brand new';
    this.color = opt.color || 'silver';
}

function Truck(opt) {
    // 默认值
    this.state = opt.state || 'used';
    this.wheelSize = opt.wheelSize || 'large';
    this.color = opt.color || 'blue';
}

function Factory() { }

// 定义该工厂factory的原型和试用工具，默认为Car
Factory.prototype.class = Car;

Factory.prototype.createObj = function (opt) {
    if (opt.class === 'car') {
        this.class = Car;
    } else {
        this.class = Truck;
    }
    return new this.class(opt);
}

// TestCode
// 创建生成汽车的工厂实例
var carFactory = new Factory();
var car = carFactory.createObj({
    class: 'car',
    doors: '2',
    state: 'aodi',
    color: 'black'
});

// console.log(car instanceof Car);  // true
console.log(car);


// 抽象工厂模式
var AbstractFactory = (function () {
    // 存储车辆类型
    var types = {};

    return {
        getVehicle: function (type, customizations) {
            var Vehicle = types[type];
            return (Vehicle) ? new Vehicle(customizations) : null;
        },

        registerVehicle: function (type, Vehicle) {
            var proto = Vehicle.prototype;

            // 只注册实现车辆契约的类  只有实现这两个方法才能被注册
            // if (proto.dirve && proto.breakDown) {
            //     types[type] = Vehicle;
            // }
            types[type] = Vehicle;
            return AbstractFactory;
        }
    }
})();

AbstractFactory.registerVehicle('car', Car);
AbstractFactory.registerVehicle('truck', Truck);

var car2 = AbstractFactory.getVehicle('car', {
    color: 'lime green',
    state: 'like new'
})

console.log(car2);
