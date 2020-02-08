var max = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log.apply(console, args);
    return Math.max.apply(Math, args);
};
console.log(max(1, 2, 3, 4, 5));
