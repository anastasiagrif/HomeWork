//Факториал

function Fact(a) {
    var result = 1;
    for(var i = a; i > 0; i--){
        result = result * i;
    }
    return result;
}
console.log(Fact(5))
console.log(Fact(2))

// Задание_2

function Sum(b) {
    var c = 0;
    for(var t = b; t > 0; t--){
        c = c + t;
    }
    return c;
}
console.log(Sum(3))



// Последовательность чисел Фибоначчи
// 1 1 2 3 5 8 13
//           ^  ^
//          d0 d1
// 1 1 2 3 5 8 13 21
//           ^  ^  ^
//          d0 d1 d2
// 1 1 2 3 5 8 13 21
//              ^  ^
//             d0 d1
function fib(n) {
    var d0 = 1;
    var d1 = 1;
    if (n < 3) {
        return 1;
    }
    for (var y = 3; y <= n; y++) {
        var d2 = d0 + d1;
        d0 = d1;
        d1 = d2;
    }
    return d1;
}
console.log(fib(3));

