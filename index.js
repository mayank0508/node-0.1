// const fs = require('fs'); // this is a code that we are using to use the fs module

// const hello = 'hello world';
// console.log(hello);

//   Synchronous way(blocking)
//   --------------------------------------------------------------------------------------------------------------------------------------------------
// const fs = require('fs');

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8') // this is the code we use to read a certain file, utf-8 will return the data in english
// console.log(textIn);

// const textOut = `This is what we know about avacadp: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File Written');

//   Asynchronous way(non-blocking)
//   --------------------------------------------------------------------------------------------------------------------------------------------------

const fs = require('fs');

// here this code is for reading data in asynchronous way 🫂

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      console.log(data3);


      fs.writeFile('/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err =>{
        console.log('Data has been written 👾')
      })
    });
  });
});
  console.log('this will be displayed first due to asynchronous code');

