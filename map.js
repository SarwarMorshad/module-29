//Array Map

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((x) => x * 2);
console.log(doubled);

// First Index Length
const friends = ["Alice", "Bob", "Charlie"];
const nameLength = friends.map((friend) => friend.length);
const firstNameLength = nameLength[0];
console.log(nameLength);
console.log(firstNameLength);
