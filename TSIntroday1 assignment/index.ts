enum subjects {
  chemistry = 'chemistry',
  physics = 'physics',
  maths = 'maths',
}
const Teacher: users[] = [
  { id: 10, name: 'Yogesh', subjet: subjects.maths, number_of_student: 10 },
  { id: 11, name: 'Aeshwarya', subjet: subjects.chemistry, number_of_student: 14 },
  { id: 12, name: 'Prabhanjan', subjet: subjects.physics, number_of_student: 12 },
  { id: 13, name: 'Arjun', subjet: subjects.chemistry, number_of_student: 15 },
  { id: 14, name: 'ChandraSekhar', subjet: subjects.chemistry, number_of_student: 65 },
  { id: 15, name: 'Swanand', subjet: subjects.physics, number_of_student: 82 },
  { id: 16, name: 'Arjun', subjet: subjects.chemistry, number_of_student: 19 },
  { id: 17, name: 'Akshay', subjet: subjects.maths, number_of_student: 17 },
  { id: 18, name: 'Nrupul', subjet: subjects.physics, number_of_student: 25 },
  { id: 19, name: 'Albert', subjet: subjects.maths, number_of_student: 34 },
];
// console.log(Teacher);

type users = {
  id: number;
  name: string;
  age?: number;
  salary?: number;
  subjet?: subjects;
  number_of_student?: number;
};

const arr: users[] = [
  { id: 1, name: 'Ankit', age: 19, salary: 260000 },
  { id: 2, name: 'Neha', age: 20, salary: 650000 },
  { id: 3, name: 'Kajal', age: 19, salary: 10000 },
  { id: 4, name: 'Amit', age: 30, salary: 125000 },
  { id: 5, name: 'Krishna', age: 22, salary: 190000 },
  { id: 6, name: 'Anjali', age: 30, salary: 270000 },
  { id: 7, name: 'Dhruva', age: 40, salary: 100000 },
  { id: 9, name: 'Rekha', age: 32, salary: 3500000 },
];
// console.log(arr);





const sorts = (arr: users[], a : string): users[] => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let sort1 = arr[i];
    while (j >= 0 && arr[j].id > sort1.id) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = sort1;
  }
  return arr;
};

sorts(arr, 'id');
sorts(Teacher, 'id');
console.log(arr);
console.log(Teacher);