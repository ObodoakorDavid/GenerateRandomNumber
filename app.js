/** @format */

let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);

let btn = document.querySelector("button");

let p = document.querySelector("p");

function GenNewNumber() {
  p.innerText = randomNumber;

  location.reload();
}

if (randomNumber < 20) {
  console.log(p);
  p.innerText = randomNumber;
} else {
  console.log(p);
  p.innerText = randomNumber;
}

// GenNewNumber();

btn.addEventListener("click", GenNewNumber);
