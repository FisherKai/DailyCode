/**
 * Mixin(混合)模式
 * 该模式的目的是函数复用
 * 优点：函数复用
 * 缺点：在大型项目中导致原型污染和函数起源方面的不确定
 */
// 子类化
var Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = 'male';
}

var clark = new Person('Clark', 'Kent');
console.log(clark);
var Superhero = function (firstName, lastName, powers) {
    Person.call(this, firstName, lastName);
    this.powers = powers;
}

Superhero.prototype = Object.create(Person.prototype);
var superman = new Superhero('yu', 'kai', '[kiss,flight]');
console.log(superman);