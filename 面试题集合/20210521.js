var _default = 0;
Object.defineProperty(window, 'a', {
    get: function () {
        return ++_default;
    }
})

if (a === 1 && a === 2 && a === 3) {
    console.log('true');
}


