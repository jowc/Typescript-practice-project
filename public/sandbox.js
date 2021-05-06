"use strict";
var list = null;
var person;
list = 2;
person = {
    UserName: 'Joseph',
    Lastname: "chikeme",
    Age: 25,
    color: 'Caucasian'
};
var mark;
mark = function (a, b, c) {
    console.log("past mark");
    if (c)
        return (b + " chose " + a + " in " + c);
    else
        return (b + " chose " + a);
};
console.log(mark(10, "Joseph", "maths"));
console.log(person, list);
