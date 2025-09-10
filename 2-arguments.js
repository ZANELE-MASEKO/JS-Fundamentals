/*const num= [];

if (num.length ==0) {
    console.log("No argument");
}
else if (num.length==1) {
    console.log("Argument found");
}
else {
    console.log("Arguments found");
}*/
const args = process.argv.slice(2);
const numArgvs= args.length;

if (numArgvs===0) {
    console.log('No argument');
}
else if (numArgvs ===1) {
    console.log('Argument found');
}
else {
    console.log('Arguments found')
}