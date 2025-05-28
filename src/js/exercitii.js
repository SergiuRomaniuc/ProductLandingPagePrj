// 1. Calculati suma a doua numere si afisati rezultatul in consola

let a = 5;
let b = 5;

console.log("Suma a + b = " + (a+b));

// 2. Afisati numerele pare de la 1 la 10

for(let i = 1; i<=10; i++) {
  if(i % 2 == 0) {
    console.log(i);
  }
}

// 3. Salutati utilizatorul luand numele si prenumele sau cu ajutorul lui promt + salutati-l in consola


// let nume = prompt("Care este numele dumneavoastra?");
// let prenume = prompt("Care este prenumele dumneavoastra?");

// console.log("Buna ziua "+ prenume + " " + nume);

// 4. Salutati utilizatorul luand numele si prenumele sau cu ajutorul lui promt + salutati-l intr-o ferestra de alert

// let nume1 = prompt("Care este numele dumneavoastra?");
// let prenume1 = prompt("Care este prenumele dumneavoastra?");
//
// alert("Buna ziua "+ prenume1 + " " + nume1);

// 5. Creaza un buton care atunci cand este apasat afiseaza un mesaj in consola



function action() {
  let button = document.getElementById("action-button");
  button.addEventListener("click", function() {
    console.log("Hello there!!!");
  })
}

action();
