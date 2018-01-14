//Калькулятор
var a = +prompt("Введите число");
var c =  prompt("Выберите действие");
var b = +prompt("Введите число");
 if(c == "+"){
     function Add(a, b) {
         var result = a + b;
         return result;
     }
     console.log(Add(a,b));
 }else if(c == "-") {
     function Sub(a, b) {
         var result_2 = a - b;
         return result_2;
     }
     console.log(Sub(a,b));
 }else if(c == "*") {
     function Mul(a, b) {
         var result_3 = a * b;
         return result_3;
     }
     console.log(Mul(a,b));
 }else if(c == "/") {
     if(b!=0){
     function Div(a, b) {
         var result_3 = a / b;
         return result_3;
     }
     }else{
         alert("Stop");
         }
         console.log(Div(a,b));
     }
