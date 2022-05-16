const x : string = "jaya";
let y = 10;
y += 5;

console.log(x,y);

function sum (a: number, b: number) {
    return a + b;
}
sum (1, 2); //12
//////////////////////////////////////////////////
for (let i = 0; i <1; i++)
{
    console.log(i);
}

console.log("Hello Typescript");
// Type Inference

const my_name : string = "jaya";

const myAge : number = 20;

// const isMarried : boolean = true;
const isMarried  = true;

if (isMarried === true) {
    console.log("True");
}
else {
    console.log("False");
}

// // const arr = [1,2];
// // var arr2 = [...arr, 3];
const arr : number[] = [1,2];
const arr2 : number[] = [...arr, 3];

function add(x: number,y: number):number {
    return x + y;

}

// const sum =(x: number,y: number) : number => {
//     return x + y;
// };
// add(1,2);
// let output = add(1,2);
// add("s","s"); //should fail

//string , number , boolean
//tsc

//JSON OBJETC notation

//custom Typesc

type Human ={
    hasLegs :boolean;
    veg: boolean;
};
type User = {
    username :string;
    age? :number;
    isMarried: boolean;
    salary? :number;
    // animal : Human;
};

const masai : User = {
    username : "Masaischool",
    age:20,
    // animal : {
    //     hasLegs : false,
    //     veg: true,
    // },
    isMarried : true,
    salary :12200,
};

const jaya: User = {
age : 123,
isMarried : false,
username : "jaya",
};
console.log(masai);

interface Pet {
    name : string;
    age: number;
    owner?: Human;
}

// interface Animal {
//         noOFLegs : Number;
//         hasWings : boolean;
//     }

//     interface Dog extends Animal {
//     food : string;
// }

// const myDog : Dog ={
//     food : "pedigree",
// }


// // EXACT SAME THING IN TYPES
type Animal = {
    noOFLegs : number;
    hasWings: boolean;
}

type Dog = {
    food : string;
}

// // Composition
const myDog : Dog | Animal = {
    food : "pedigree",

};

const myPets: number[] = [1,2,3,4];
// const myPets : Dog[] = [{food:"6" }, {food:"4" }, {food:"12"}]


const dog :Pet ={
    name : "tommy",
    age: 3,
    //owner : {haslegs,veg}
};
// enum Color {
//     RED, 
//     GREEN,
//     BLUE,
// }
// let red :Color.RED = "RED"; 
