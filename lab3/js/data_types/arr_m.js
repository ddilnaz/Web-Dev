//1
function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }

//2
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arr = [5, 3, 8, 1];
  
  filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
  
  alert( arr ); // [3, 1]

//3
let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => b - a);

alert( arr1 );

//4
function copySorted(arr2) {
    return arr2.slice().sort();
  }
  
  let arr2 = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr2);
  
  alert( sorted );
  alert( arr2 );
//5
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }
//6
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary

//7
let j = { name: "John", surname: "Smith", id: 1 };
let p = { name: "Pete", surname: "Hunt", id: 2 };
let m = { name: "Mary", surname: "Key", id: 3 };

let u = [ j, p, m ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith

//8
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let jo = { name: "John", age: 25 };
  let pe = { name: "Pete", age: 30 };
  let ma = { name: "Mary", age: 28 };
  
  let arr4 = [ pe, jo, ma ];
  
  sortByAge(arr4);
  
  // now sorted is: [john, mary, pete]
  alert(arr4[0].name); // John
  alert(arr4[1].name); // Mary
  alert(arr4[2].name); // Pete
//9
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O
// 10
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }