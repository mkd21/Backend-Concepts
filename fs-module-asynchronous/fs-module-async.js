
const fsModule = require("fs");

const pathModule = require("path");

const file = "test1.txt";

const filePath = pathModule.join(__dirname , file);


// writing a file 
// fsModule.writeFile(filePath , "Data available inside the file using asynchronous writeFile method" , (err) =>{
//     if(err) throw err;
// });


// reading a file 

// fsModule.readFile(filePath  , "utf-8" , (err , data) =>{
//     if(err) throw err;
//     console.log(data);
// });


// updating the data in a file 

// fsModule.appendFile(filePath , "\nupdated the data using appendFile method" , (err) =>{
//     if(err) throw err;
// })


// deleting a file 

// fsModule.unlink(filePath , (err) => {
//     if(err) throw err; 
// });


// creating a folder inside the fs-module-asynchronous folder and trying to add file and do operations 


const folderPath = pathModule.join(__dirname , "folder2");
const filePath1 = pathModule.join(folderPath , "text-file-inside-folder2.txt");

fsModule.writeFile(filePath1 , "created from fs-module" , (err) =>{
    if(err) throw err;
});

fsModule.appendFile(filePath1 , "\nthis file was created from fs-module-async file" , (err) =>{
    if(err) throw err;
});