var addOne = function(e) {
    return e + 1;
};

var square = function(e) {
    return e * e;
};

Function.prototype.pipe = function(f) {
    return function(ff) {
        return f(this(ff));
    }.bind(this);
};


// -----------------

Function.prototype.pipe = function(fn) {
    return (...args) => fn(this(...args))
}



var result = [1,2,3,4,5].map(addOne.pipe(square)) //-> [4,9,16,25,36]
console.log(result);