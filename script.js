"use strict";

/*let x = 10;
let y = 7;
let result = (x > y) ? alert("x больше, чем y") : alert("x не больше, чем y");*/

/*let num = +prompt("Введите произвольное число");
if(num % 2 === 0) {
    alert(`число ${num} четное`);
} else {
    alert(`число ${num} нечетное`);
} */

/*let num = prompt("введите число");
if(num > 0) {
    alert(`${num.length} число положительное`);
} else {
    alert(`${num.length - 1} число отрицательное`);
}*/

/*let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let c = +prompt("Введите третье число");
if(a > b && a > c) {
    alert(a);
} else if(b > a && b > c) {
    alert(b);
} else {
    alert(c);
}*/

let a = +prompt("Введите первую длину стороны треугольника");
let b = +prompt("Введите вторую длину стороны треугольника");
let c = +prompt("Введите третью длину стороны треугольника");
if((a + b) > c && (a + c) > b && ((b + c) > a)) {
    alert("треугольник существует");
} else {
    alert("такого треугольника нет в природе");
}