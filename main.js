'use strict';

// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// sum(3) = 3 

// sum(5) = 8

// sum(20) = 28

let sum = (function() {
    let sumNum = 0;
    return function (item) {
        return sumNum = sumNum + item;
    }
})();


