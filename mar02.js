
// Rest operator without function.

const totalOfArray = (...argss) =>{
    let totalSum = 0
    argss.forEach((n)=>{
        totalSum += n
    })
    console.log(totalSum);
}
totalOfArray(1,2,3)



//Spread operator with function.

let AddingOfSpread = (n1,n2,n3,n4) => {
    return n1+n2+n3+n4
}
let fourNumber = [1,2,3,4]
console.log(AddingOfSpread(...fourNumber))



//Spread operator without function.

const oldArray = [1,2,3,4,5]
const newArray = ["A","B","C",...oldArray,6,7,8,9]

console.log(newArray)






let ArrayOfObject = [
    {
        Name:"Deepak Baria",
        Age:27,
        City:"Indore",
        Salary:40000
    },
    {
        Name:"Prajwal Rai",
        Age:25,
        City:"Vijay Nagar",
        Salary:25000
    },
    {
        Name:"Pankaj Agrawaal",
        Age:27,
        City:"Ujjain",
        Salary:50000
    },
    {
        Name:"Aashta Pawar",
        Age:23,
        City:"Rajendra nagar",
        Salary:25000
    },
    {
        Name:"Prachi Patel",
        Age:20,
        City:"Velocity",
        Salary:50000
    }
]

// Array.prototype.add = function () {
//     let result = 0;
//     for (let i = 0;i<this.length;i++){
//         result +=this[i]
//     }
//     return result
// }


let total=0
for(let{Salary} of ArrayOfObject)
{
 total = total+Salary ;    
}
console.log(total)



 