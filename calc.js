let display = document.getElementById("display");

function btnClick(val) {
  document.getElementById("display").value += val;
}

function equalClick() {
  let text = document.getElementById("display").value;
  let result = eval(text);
  document.getElementById("display").value = result;
}
