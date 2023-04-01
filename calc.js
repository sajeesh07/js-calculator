let display = document.getElementById("display");
console.log("hello");
function click(value) {
  console.log(value, "value");
  console.log(display, "display");
  display.value += value;
}

function equals() {
  let result = eval(display.value);
  display.value = result;
}
