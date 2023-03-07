let Prom = (n1,n2) =>{
    console.log(`Fatching data`)
    return new Promise((resolve,reject)=>{
        let cal = n1*n2
        setTimeout(()=>{
            if(cal){
                resolve(`Your Answer ${cal}`)
            }
            else{
                reject(`failed to calculate`)
            }
        },2000)
    })
}
Prom(5,4).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})


let restParameterCalculate = (...args) =>{
    let sumOfArgs = 0
    args.forEach((n)=>{
        sumOfArgs += n
    })
    return sumOfArgs
}
console.log(restParameterCalculate(1,2,3,4,5))





let restParameterCalculateLoop = (...argss) =>{
    let sumOfArgss = 0
    let i = 0
    while(i<argss.length){
        sumOfArgss += argss[i]
        i++
    }
    return sumOfArgss
}
console.log(restParameterCalculateLoop(1,2,3,4,5))



let spreadOperator = (n1,n2,n3,n4,n5)=> {
    return n1+n2+n3+n4+n5
}
let numbers = [1,2,3,4,7]
console.log(spreadOperator(...numbers))






let oldArray = [1,2,3,4,5]
let newArray = ['a','b','c',...oldArray,6,7,8,9,10]
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


let totalCal = 0
for(let i=0;i<ArrayOfObject.length;i++){
    totalCal += ArrayOfObject[i].Salary
}
console.log(totalCal)



let sumofSalary = ArrayOfObject.map((item)=>item.Salary).reduce((curr,add)=>curr+add,0)
console.log(sumofSalary)


let currentDate = new Date()
let day = currentDate.getDate()
let month = currentDate.getMonth()
let year = currentDate.getFullYear()
let date = `${day}/ ${month}/ ${year}`
console.log(date)


let TimeAndAmpm = (date) =>{
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let ampm = hours > 12 ? "pm" : "am"
    hours = hours % 12
    hours = hours ? hours : 12
    let time = `${hours} : ${minutes}  ${ampm}`
    return time
}
console.log(TimeAndAmpm(new Date()))






let str = "today is my holiday thats why i am at home"
let a = str.split("")
let b = []
for(let i of a){
    if(b.indexOf(i)==-1){
        b.push(i)
    }
}
for(let x of b){
    let c = 0
    for(i of a){
        if(i==x){
            c++
        }
    }
    console.log(`${x}==${c}`)
}

let addition = () =>{
    let firstvalue = document.getElementById("fn").value
let secondvalue = document.getElementById("sn").value
let add = parseInt(firstvalue)+parseInt(secondvalue)
document.getElementById("res").value=add
}


let substract = () =>{
    let firstvalue = document.getElementById("fn").value
    let secondvalue = document.getElementById("sn").value
    let sub = parseInt(firstvalue) - parseInt(secondvalue)
    document.getElementById("res").value = sub
}

let multiple = () =>{
    let firstvalue = document.getElementById("fn").value
    let secondvalue = document.getElementById("sn").value
    let multi = parseInt(firstvalue) * parseInt(secondvalue)
    document.getElementById("res").value = multi
}
let divide = () =>{
    let firstvalue = document.getElementById("fn").value
    let secondvalue = document.getElementById("sn").value
    let divi = parseInt(firstvalue) / parseInt(secondvalue)
    document.getElementById("res").value = divi 
}





let loadData = async() =>{
    try{
        let url = 'https://jsonplaceholder.typicode.com/todos/1'
        let response = await fetch(url)
        let data = await response.json()
        return data
    }
    catch(error){
        console.log(error)
    }
}
(async()=>{
    let data = await loadData()
    console.log(data)
})()
