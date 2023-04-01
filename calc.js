let display = document.getElementById("display");

function btnClick(val) {
  console.log(typeof val);
  let newValue;
  if (typeof val === "String") {
    newValue = Number(val);
  } else {
    newValue = val;
  }
  console.log(val);
  document.getElementById("display").value += newValue;
}

function equals() {
  let result = eval(display.value);
  display.value = result;
}
