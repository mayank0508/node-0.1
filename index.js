// const fs = require('fs'); // this is a code that we are using to use the fs module

// const hello = 'hello world';
// console.log(hello);

const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8') // this is the code we use to read a certain file, utf-8 will return the data in english
console.log(textIn);