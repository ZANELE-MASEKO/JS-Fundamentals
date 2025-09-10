let number = parseFloat(process.argv[2]);

if (number >0 ) {
    console.log(`My number: ${Math.floor(number)}`);
}
else if (number < 0) {
    console.log(`My number: ${Math.ceil(number)}`);
}

else {
    console.log('Not a number')
}
