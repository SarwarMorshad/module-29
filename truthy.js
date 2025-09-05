let data;
data = 0;
// data = ""; Empty string is falsy
data = " "; // Space is truthy
if (data) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
