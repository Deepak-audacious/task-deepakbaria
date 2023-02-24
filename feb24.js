//program Date Format
let currentDate = new Date();
//Date
let day = currentDate.getDate();
//Month
let month = currentDate.getMonth() + 1;
// Year
let year = currentDate.getFullYear();
// Format
const date = day + "/" + month + "/" + year;
console.log(date);

 DateAndTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours > 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var Time = hours + ':' + minutes + ' ' + ampm;
    return Time;
  }
  
  console.log(DateAndTime(new Date));









//Array of Object

obj = [
  {
    name: "Deepak Baria",
    age: 27,
    gender: "Male",
    salary: 27000,
  },
  {
    name: "Rahul Punase",
    age: 27,
    gender: "Male",
    salary: 40000,
  },
  {
    name: "Aruna Punase",
    age: 27,
    gender: "FeMale",
    salary: 30000,
  },
  {
    name: "Vivek Osari",
    age: 27,
    gender: "Male",
    salary: 50000,
  },
];








// Salary added by reduce method.

let sum = obj.map((curr) => curr.salary).reduce((a, b) => a + b, 0);
console.log(sum);



//Salary added by for loop.
add = 0;
for (var i = 0; i < obj.length; i++) {
  add += obj[i].salary;
}
console.log(add);




//Full data.
for (var i = 0; i < obj.length; i++) {
  console.log(obj[i]);
}






//       // foreach loop
// obj.forEach(function(item, index) {
//   console.log(item.salary);
// });


