
let Prom = (a,b) => {
  return new Promise((resolve, reject) => {
    console.log("Fetch data please wait");
    var c = a * b;
    setTimeout(() => {
      if (c) {
        resolve(`Your Answer ${c}`);
      } else {
        reject(`Failed to calculate`);
      }
    }, 2000);
  });
};
Prom(5, 2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });











let count = 0;

let Timer = setInterval(()=>{
    count += 1;

    if(count === 5){
        clearInterval(Timer);
    }
    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
}, 2000);