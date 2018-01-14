var a = +prompt("Введите число");
function Num_1(a) {
    if (a > 0) {
        alert("Положительное число");
    } else if(a == 0){
        alert( "Ноль" );
    }
    else {
        alert( "Отрицательное число" );
    }


}

Num_1(a)

function Num_2(a){
        if(a%2 == 0) {
            alert("Yes!");
        }else {
            alert("No!");
        }
}
Num_2(a)

function Num_3(a){
    if(a%3 == 0) {
        alert("Yes!");
    }else {
        alert("No!");
    }
}
Num_3(a)

function Num_4(a){
    if(a%5 == 0) {
        alert("Yes!");
    }else {
        alert("No!");
    }
}
Num_4(a)

function Num_5(a){
    if(a%6 == 0) {
        alert("Yes!");
    }else {
        alert("No!");
    }
}
Num_5(a)

function Num_6(a){
    if(a%9 == 0) {
        alert("Yes!");
    }else {
        alert("No!");
    }
}
Num_6(a)

function is_prime(x) {
    for(var i = 2; i < x; i++) { // перебираем все i от 2 до x не включительно
        if (x % i == 0) { // если x делится на i без остатка
            return false; // то x -- составное
        }
    }
    return true; // если не нашлось таких i, на которые x делится нацело, то x -- простое 
}

if (is_prime(a)) {
    alert("Это простое число");
} else {
    alert("Это составное число");
}



