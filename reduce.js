const numbers = [111,222,333,444,555,666,777,888,999];
const sum = numbers.reduce(function (result, item){
    return result + item;
}, 0);
console.log(sum);
