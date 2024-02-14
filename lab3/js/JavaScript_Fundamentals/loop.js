//ex1
let i = 3;
while (i) {
  alert( i-- );
} //1

//ex2

let q = 0;
while (++i < 5) alert( i );//From 1 to 4

let w = 0;
while (i++ < 5) alert( i );//From 1 to 5

//ex3
for (let p = 0; p < 5; p++) alert( i );
for (let s = 0; s < 5; ++s) alert( i );//from 0 to 4 in both cases

//ex4
for (let r = 2; r <= 10; r++) {
    if (r % 2 == 0) {
      alert( r );
    }
  }

//ex5
let x = 0;
while (x < 3) {
  alert( `number ${x}!` );
  x++;
}

//ex6
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//ew7
let n = 10;

nextPrime:
for (let c = 2; c <= n; c++) { // for each i...

  for (let m = 2; m < c; c++) { // look for a divisor..
    if (c % m == 0) continue nextPrime; // not a prime, go next i
  }

  alert( c ); // a prime
}