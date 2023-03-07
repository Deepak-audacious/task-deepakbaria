let respOprator = (...args) =>{
    let sumOfArgs = 0
    let i = 0
    while(i<args.length){
        sumOfArgs += args[i]
        i++
    }
    return sumOfArgs
}
console.log(respOprator(1,2,3,4,5))


