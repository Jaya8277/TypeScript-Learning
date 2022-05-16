var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var x = "jaya";
var y = 10;
y += 5;
console.log(x, y);
function sum(a, b) {
    return a + b;
}
sum(1, 2); //12
//////////////////////////////////////////////////
for (var i = 0; i < 1; i++) {
    console.log(i);
}
console.log("Hello Typescript");
// Type Inference
var my_name = "jaya";
var myAge = 20;
// const isMarried : boolean = true;
var isMarried = true;
if (isMarried === true) {
    console.log("True");
}
else {
    console.log("False");
}
// // const arr = [1,2];
// // var arr2 = [...arr, 3];
var arr = [1, 2];
var arr2 = __spreadArray(__spreadArray([], arr, true), [3], false);
function add(x, y) {
    return x + y;
}
var masai = {
    username: "Masaischool",
    age: 20,
    // animal : {
    //     hasLegs : false,
    //     veg: true,
    // },
    isMarried: true,
    salary: 12200
};
var jaya = {
    age: 123,
    isMarried: false,
    username: "jaya"
};
console.log(masai);
// // Composition
var myDog = {
    food: "pedigree"
};
var myPets = [1, 2, 3, 4];
// const myPets : Dog[] = [{food:"6" }, {food:"4" }, {food:"12"}]
var dog = {
    name: "tommy",
    age: 3
};
// enum Color {
//     RED, 
//     GREEN,
//     BLUE,
// }
// let red :Color.RED = "RED"; 
