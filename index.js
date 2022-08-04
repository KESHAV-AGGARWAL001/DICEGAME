console.log("welcome to this game");
let number1 = Math.ceil(Math.random() * 6);
let number2 = Math.ceil(Math.random() * 6);
console.log("the first random number is" + number1);
console.log("the second random number is" + number2);

function start() {
  document.getElementById("image1").src = "image" + `${number1}` + ".jpg";
  document.getElementById("actualsum").innerText = number1;
  document.getElementById("image2").src = "image" + `${number2}` + ".jpg";
  document.getElementById("actualsum").innerText = number1 + number2;
  if (document.getElementById("actualsum") === "12") {
    document.getElementById("finalresult").innerHTML =
      "HURRAH !! YOU HAVE WON !";
  } else {
    document.getElementById("finalresult").innerHTML = "BETTER LUCK NEXT TIME";
  }
}

function reset() {
  document.getElementById("actualsum").innerText = 0;
  window.document.location.reload(true);
}
