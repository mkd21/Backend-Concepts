
/*
    when we are using async await syntax then it is recommended to use fs module promise based     

    normally we do --> require("fs") , but for async await we need to do - require(fs/promises) module
*/ 


const pathModule = require("path");
const fsModulePromiseBased = require("fs/promises");



const filePath = pathModule.join(__dirname , "outer-file.txt");

// writng in a file 

// const fileWriter = async () =>{
//     try 
//     {
//         await fsModulePromiseBased.writeFile(filePath , "Data made available using async await function");
//         console.log("file data successfully written");
//     }
//     catch(err)
//     {
//         console.log("error generated",err);
//     }
// }

// fileWriter();



// reading the file 

// const fileReader = async() =>{
//     try
//     {
//         const receivedData = await fsModulePromiseBased.readFile(filePath , "utf-8");
//         console.log(receivedData);
//     }
//     catch(err)
//     {
//         console.log("error is",err);
//     }
// }

// fileReader();



// adding more data inside a file without overwriting the old data 

// const appendingData = async () =>{

//     try 
//     {
//         await fsModulePromiseBased.appendFile(filePath , "\nData is added using append file method without overwriting the already existing data");
//         console.log("command executed successfully");
//     }
//     catch(err)
//     {
//         console.log("error while executing the command",err.message);
//     }
// }

// appendingData();




// TRYING TO MAKE CHANGES IN THE DIFFERENT FOLDER FROM THIS FILE 


const folderPath = pathModule.join(__dirname , "testFolder1" , "testFolder1-file1.txt");
// console.log(folderPath);


// writing to a file 
// const writingFile = async() =>{

//     try 
//     {
//         await fsModulePromiseBased.writeFile(folderPath , "this file is inside the test folder 1 written from file outside the testfolder1");
//         console.log("task successfull");
//     }
//     catch(err)
//     {
//         console.log(err.message);
//     }
// }

// writingFile();


// reading file 

// const readingFile = async () =>{

//     try 
//     {
//         const receivedData = await fsModulePromiseBased.readFile(folderPath , "utf-8");
//         console.log(receivedData);
//     }
//     catch(err)
//     {
//         console.log(err.message);
//     }
// }

// readingFile();


