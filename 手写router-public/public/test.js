let pathToRegexp = require("path-to-regexp");

let reg = pathToRegexp.pathToRegexp('/home', [], { end: false });
console.log(reg);