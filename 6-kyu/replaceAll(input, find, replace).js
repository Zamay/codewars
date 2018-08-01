function replaceAll(input, find, replace) {
    if (find === '')
        return input === '' ? replace : replace + input.split('').join(replace) + replace;
    return input.split(find).join(replace);
}

// console.log(replaceAll("string-string", "ing", "!"));;
console.log(replaceAll("", "", "-"));
console.log(replaceAll("123", "", "-"));