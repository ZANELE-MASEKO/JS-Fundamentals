

function addition(one, two) {
    return one +two ;
}

let num1= process.argv[2];
let num2= process.argv[3];
console.log(addition(parseFloat(num1), parseFloat(num2)));