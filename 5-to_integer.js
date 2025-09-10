const number= process.argv[2];
const total = parseFloat(number);

if (total ==NaN) {
    console.log('Not a number');
}
else if (typeof total !== 'string') {
    console.log('Not a number');
}
else {
    console.log(total);
}