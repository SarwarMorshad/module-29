// loop in a Object
const student = {
  name: "John",
  age: 25,
  grade: "A",
};

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}
