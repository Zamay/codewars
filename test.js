/////////////////////////////////////////////////////

// class Chameleon {
//     static colorChange(newColor) {
//       this.newColor = newColor;
//       return this.newColor;
//     }
  
//     constructor({ newColor = "green" } = {}) {
//       this.newColor = newColor;
//     }
//   }
  
//   const freddie = new Chameleon();
//   console.log(freddie);

/////////////////////////////////////////////////////

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = "Lydia";
//     let age = 21;
//   }
  
//   sayHi(); // undefined и ReferenceError

/////////////////////////////////////////////////////

// function Animal(name) {
//     this.name = name;
// }
// Animal.prototype.getName = function(){
//     return this.name;
// };
//
// function Dog(name) {
//     Animal.call(this, name);
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
//
// Dog.prototype.bark = function(){
//     return `Dog ${this.name} is barking`;
// };
//
// let dog = new Dog ('Aban');
// console.log(dog.getName() === 'Aban');
// console.log(dog.bark() === 'Dog Aban is barking');


/////////////////////////////////////////////////////

// var myObj = {
//     a : 35,
//     b : 'hello guys',
//     c : function() {
//         console.log('this in c : ');
//         console.log(this);
//
//         function nestedFunction() {
//             console.log('this in nested in c : ');
//             console.log(this);
//         };
//         nestedFunction()
//     },
//     d : (function() {
//         console.log('this in d : ');
//         console.log(this);
//     })(),
//     e : (function() {
//         console.log('this in e : ');
//         console.log(this);
//     })
// };
// myObj.c();
// myObj.e();

/////////////////////////////////////////////////////

// function Parent(name) {
//     this.name = name || 'Adam';
// }
//
// Parent.prototype.getName = function () {
//     return this.name;
// };
//
// function Child() {
//     Parent.apply(this, arguments)
// }
//
// Child.prototype = new Parent();
//
// let kid = new Child('Bob');
// console.log(kid.name);
// console.log(kid.getName());
// delete kid.name;
// console.log(kid.getName());
//
//
// class Fooo extends Parent {
//     constructor(name) {
//         super(name)
//     }
// }
//
// let foo = new Fooo();
//
// console.log(foo.name);
// console.log(foo.getName());

/////////////////////////////////////////////////////

// var length = 10;
// function fn() {
//     console.log(this.length);
// }
//
// var obj = {
//     length: 5,
//     method: function(fn) {
//         fn();
//         arguments[0]();
//     }
// };
//
// obj.method(fn, 1); // 10 2

/////////////////////////////////////////////////////

// function sum(x, y) {
//     if (y !== undefined) {
//         return x + y;
//     } else {
//         return function(y) { return x + y; };
//     }
// }
//
// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

/////////////////////////////////////////////////////

// function isInteger(x) { return (x ^ 0) === x; }

/////////////////////////////////////////////////////

// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
// Array.from(new Set (array)); // [1, 2, 3, 5, 9, 8]

/////////////////////////////////////////////////////
//
// var firstWord = "Mary";
// var secondWord = "Army";
//
// isAnagram(firstWord, secondWord); // true
//
// function isAnagram(first, second) {
//     var a = first.toLowerCase();
//     var b = second.toLowerCase();
//
//     a = a.split("").sort().join("");
//     b = b.split("").sort().join("");
//
//     return a === b;
// }

//////////////////////////////////////////////////////

// var string = "Welcome to this Javascript Guide!";
//
// // Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");
//
// // Output becomes emocleW ot siht tpircsavaJ !ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
//
// function reverseBySeparator(string, separator) {
//     return string.split(separator).reverse().join(separator);
// }

//////////////////////////////////////////////////////

// function isPalindrome(word) {
//     const length = word.length;
//     const half = Math.floor(length / 2);
//     for (let index = 0; index < half; index++) {
//         if (word[index] !== word[length - index - 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// isPalindrome('madam'); // => true
// isPalindrome('hello'); // => false

/////////////////////////////////////////////////

// isPalindrome("racecar"); // true
// isPalindrome("race Car"); // true
//
// function isPalindrome(word) {
//     //str = str.replace(/\W/g, '').toLowerCase(); // или так
//     var str = word.toLowerCase().replace(/\s/g, "");
//     return str === str.split("").reverse().join("");
// }

///////////////////////////////////////////////////////

// var expression = "{{}}{}{}"
// var expressionFalse = "{}{{}";
//
// isBalanced(expression); // true
// isBalanced(expressionFalse); // false
// isBalanced(""); // true
//
// function isBalanced(expression) {
//     var checkString = expression;
//     var stack = [];
//
//     // If empty, parentheses are technically balanced
//     if (checkString.length <= 0) return true;
//
//     for (var i = 0; i < checkString.length; i++) {
//         if(checkString[i] === '{') {
//             stack.push(checkString[i]);
//         } else if (checkString[i] === '}') {
//             // Pop on an empty array is undefined
//             if (stack.length > 0) {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         }
//     }
//
//     if (stack.pop()) return false;
//     return true;
// }

///////////////////////////////////////////////////////

// isIsomorphic("egg", 'add'); // true
// isIsomorphic("paper", 'title'); // true
// isIsomorphic("kick", 'side'); // false
//
// function isIsomorphic(firstString, secondString) {
//
//     if (firstString.length !== secondString.length) return false
//
//     var letterMap = {};
//
//     for (var i = 0; i < firstString.length; i++) {
//         var letterA = firstString[i],
//             letterB = secondString[i];
//
//         if (letterMap[letterA] === undefined) {
//             letterMap[letterA] = letterB;
//         } else if (letterMap[letterA] !== letterB) {
//             return false;
//         }
//     }
//     return true;
// }

//////////////////////////////////////////////////////////

// function quote(str, config) {
//     const { char = '"', skipIfQuoted = true } = config;
//     const length = str.length;
//     if (skipIfQuoted
//         && str[0] === char
//         && str[length - 1] === char) {
//         return str;
//     }
//     return char + str + char;
// }
// quote('Hello World', { char: '*' });        // => '*Hello World*'
// quote('"Welcome"', { skipIfQuoted: true }); // => '"Welcome"'

////////////////////////////////////////////////////////

// function rotateList(elements, rotates) {
//     return elements.concat(elements.splice(0, rotates))
// }
//
// console.log(rotateList([1, 2, 3, 4, 5, 6], 2));

//////////////////////////////////////////////////

//TODO: Реализуйте каррирование
// https://true-coder.ru/javascript/karrirovanie-karring-v-javascript.html

//////////////////////////////////////////////////

// TODO: Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды

// let arr = [1, 2, 3, 4, 5, 4, 6];
//
// for (let i of arr) {
//     setTimeout(() => console.log(i), 1000 * i);
// }

///////////////////////////////////////////////////

// let fibonacci = (function(){
//     let memo = [0, 1];
//     let fib = function (n) {
//         let result = memo[n];
//         if(typeof result !== 'number'){
//             result = fib(n - 1) + fib(n - 2);
//             memo[n] = result;
//         }
//         return result;
//     };
//     return fib;
// }());
//
// console.log(fibonacci(1000));

////////////////////////////////////////////////////

// function foo(str) {
//     let i,
//         word,
//         count = Object.create(null);
//     // or typeof counnt[word] === 'number'
//
//     let words = str.toLowerCase().split(/[\s,.]+/);
//
//     for (i = 0; i < words.length; i++) {
//         word = words[i];
//         if (count[word]) {
//             count[word] += 1;
//         } else {
//             count[word] = 1;
//         }
//     }
//     return count;
// }
// let str = 'Lorem ipsum dolor sit constructor  aliqua. constructor, array';
// console.log(foo(str));