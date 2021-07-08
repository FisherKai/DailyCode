/**
 * Flyweight 享元模式
 * 1、处理共享数据
 * 2、用于DOM层，避免将事件方法绑定到每个子元素上，直接绑定到父级元素，通过事件的传递到子元素
 */
// 在JS里模拟纯虚拟继承implement
Function.prototype.implementsFor = function (parentClassOrObject) {
    if (parentClassOrObject.constructor === Function) {
        // 正常继承
        this.prototype = new parentClassOrObject();
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject.prototype;
    } else {
        // 纯虚拟继承
        this.prototype = parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject;
    }
    return this;
};

// 享元对象
// 咖啡订单
var CoffeeOrder = {
    serveCoffee: function (context) { },
    getFlavor: function () { }
};

// 实现CoffeeOrder的具体享元对象
function CoffeeFlavor(newFlavor) {
    var flavor = newFlavor;

    if (typeof this.getFlavor === 'function') {
        this.getFlavor = function () {
            return flavor;
        }
    }

    if (typeof this.serveCoffee === 'function') {
        this.serveCoffee = function (context) {
            console.log(`Serving Coffee flavor ${flavor} to table number ${context.getTable()}`);
        }
    }
}

// 为CoffeeOrder实现接口
CoffeeFlavor.implementsFor(CoffeeOrder);

// 处理coffee订单的table数量
function CoffeeOrderContext(tableNumber) {
    return {
        getTable: function () {
            return tableNumber;
        }
    };
}

// 享元工厂
function CoffeeFlavorFactory() {
    var flavors = [];

    return {
        getCoffeeFlavor: function (flavorName) {
            var flavor = flavors[flavorName];
            if (flavor === undefined) {
                flavor = new CoffeeFlavor(flavorName);
                flavors.push([flavorName, flavor]);
            }
            return flavor;
        },

        getTotalCoffeeFlavorsMade: function () {
            return flavors.length;
        }
    }
};

// eg:test
function testFlyWeight() {

    // 已订购的flavor
    var flavors = new CoffeeFlavor(),

        // 订单table
        tables = new CoffeeOrderContext(),

        // 订单的数量
        ordersMade = 0,

        // TheCoffeeFlavorFactory 实例
        flavorFactory;

    function takeOrders(flavorIn, table) {
        flavors[ordersMade] = flavorFactory.getCoffeeFlavor(flavorIn);
        tables[ordersMade++] = new CoffeeOrderContext(table);
    }

    flavorFactory = new CoffeeFlavorFactory();

    takeOrders('Cappuccino', 2);
    takeOrders('Cappuccino', 2);
    takeOrders('Frappe', 1);
    takeOrders('Xpresso', 1);

    for (var i = 0; i < ordersMade; ++i) {
        flavors[i].serveCoffee(tables[i]);
    }

    console.log(`total CoffeeFlavor objects made: ${flavorFactory.getTotalCoffeeFlavorsMade()}`);
}

testFlyWeight();