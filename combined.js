const student = [
  { Id: 1, Name: "John", Age: 20, marks: 85 },
  { Id: 2, Name: "Jane", Age: 22, marks: 90 },
  { Id: 3, Name: "Jim", Age: 21, marks: 78 },
  { Id: 4, Name: "Jill", Age: 23, marks: 88 },
  { Id: 5, Name: "Jack", Age: 24, marks: 92 },
];

const names = student.map((s) => s.Name);
console.log(names);

const goodStudents = student.filter((s) => s.marks > 80);
console.log(goodStudents);

const nums = [1, 2, 3, 4, 5];
let output = nums.filter((n) => n % 2);
console.log(output);
