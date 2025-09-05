let data;
data = 0;
// data = ""; Empty string is falsy
data = " "; // Space is truthy
data = false; // false is falsy
data = true; // true is truthy
data = null; // null is falsy
data = {}; // Empty object is truthy
data = []; // Empty array is truthy

if (data) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
