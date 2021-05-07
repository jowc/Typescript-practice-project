"use strict";
let list = null;
let person;
list = 2;
person = {
    UserName: 'Joseph',
    Lastname: "chikeme",
    Age: 25,
    color: 'Caucasian'
};
let mark;
mark = (a, b, c) => {
    console.log("past mark");
    if (c)
        return (`${b} chose ${a} in ${c}`);
    else
        return (`${b} chose ${a}`);
};
console.log(mark(10, "Joseph", "maths"));
console.log(person, list);
