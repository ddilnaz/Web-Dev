//ex1
alert( null || 2 || undefined );//2

//ex2
alert( alert(1) || 2 || alert(3) );//underfind
//ex3
alert(1 && null && 2); //null
//ex4
alert( alert(1) && alert(2) );//null , then underfind
//ex5
alert( null || 2 && 3 || 4 );//3
//ex6
if (age >= 14 && age <= 90)
//7
if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)

//8
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); //The answer: the first and the third will execute.

//9

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}