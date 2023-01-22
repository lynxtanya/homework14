'use strict';

// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// sum(3) = 3 

// sum(5) = 8

// sum(20) = 28

let sumNum = 0;

function sum(item) {
    
    sumNum = sumNum + item;
    console.log(sumNum);
    
}

sum(3);
sum(5);
sum(20);


