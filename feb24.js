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
  let ampm = hours > 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  var Time = hours + ":" + minutes + " " + ampm;
  return Time;
};

console.log(DateAndTime(new Date()));

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









//Repeated strings count.
var str = "today is the friday";
var a = str.split("");
console.log(a);

var b = [];
for (i of a) {
  if (b.indexOf(i) == -1) {
    b.push(i);
  }
}
for (x of b) {
  var c = 0;
  for (i of a) {
    if (i == x) {
      c++;
    }
  }
  var counter = console.log(`${x}=${c}`);

}


let addition = () => {
  let firstvalue = document.getElementById("fn").value
  let secondvalue = document.getElementById("sn").value
  let add = parseInt(firstvalue) + parseInt(secondvalue)
  document.getElementById("res").value = add
}


let substract = () => {
  let firstvalue = document.getElementsById("fn").value
  let secondvalue = document.getElementById("sn").value
  let sub = parseInt(firstvalue) - parseInt(secondvalue)
  document.getElementById("res").value = sub
}

let multiple = () => {
  let firstvalue = document.getElementById("fn").value
  let secondvalue = document.getElementById("sn").value
  let multi = parseInt(firstvalue) * parseInt(secondvalue)
  document.getElementById("res").value = multi
}

let divide = () => {
  let firstvalue = document.getElementById("fn").value
  let secondvalue = document.getElementsById("sn").value
  let divi = parseInt(firstvalue) / parseInt(secondvalue)
  document.getElementsById("res").value = divi
}





// //Maximum string character replace by p character 
// var maxRepeat = (str) => {
//   let count = 0;
//   let res = str[0];
//   for (let i = 0; i < str.length; i++) {
//     let cur = 1;
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] != str[j]) 
//       break;
//       cur++;
//     }
//     if (cur > count) {
//       count = cur;
//       res = str[i];
//     }
//   }
//   return res;
// };
// // console.log(maxRepeating("sdjd kusdhfi kusdhi ksdfi"))
// var str = "krishna paradise rau";
// var repeat = console.log(maxRepeat(str));
// // console.log(repeat)

// // Replace string
// var Replace = str.replaceAll(repeat,'e')
// console.log(Replace)











// const loadData = async () => {
//   const url = 'https://jsonplaceholder.typicode.com/todos/1'
//   const res = await fetch(url);
//   console.log(res);
// }
// loadData();  





// let loadData = async() =>{
//   let url = 'https://jsonplaceholder.typicode.com/todos/1'
//   let response = await fetch(url)
//   let data = response.json()

//   console.log(data)
// }
// loadData()




let loadData = async () => {
  try {
    let url = 'https://jsonplaceholder.typicode.com/todos/1'
    let response = await fetch(url)
    let data = await response.json()
    return data
  }
  catch (error) {
    console.log(error)
  }
}
(async () => {
  let data = await loadData()
  console.log(data)
})()











let users = {
  1: {
    id: '1',
    firstName: 'Robin',
    lastName: 'Wieruch',
    isDeveloper: true,
  },
  2: {
    id: '2',
    firstName: 'Dave',
    lastName: 'Davddis',
    isDeveloper: false,
  },
};


const getUsers = () =>
  new Promise((resolve, reject) => {
    if (!users) {
      reject(new Error('Users not found'));
    }

    resolve(Object.values(users));
  });

// usage (1)
getUsers()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });