
import {fileURLToPath} from "url";
import { dirname } from "path";

import path from "path";
import fsModule from "fs";

import fsModuleAsync from "fs/promises";


const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// console.log(__dirname);

const filePath = path.join(__dirname , "textFileContainers" , "textFile.txt");


// synchronous behaviour

// console.log("Hello 1");
// try 
// {
//     fsModule.writeFileSync(filePath , "hello from syncronous function");
//     console.log("executed writing in the file");
// }
// catch(Err) {
//     console.log("error is",Err);
// }

// console.log("Hello 2");



// asynchronous behaviour 

// console.log("Hello 1");

// fsModule.writeFile(filePath , "data entered from asynchronous function" , "utf-8" , (message) =>{
//     console.log(message);
// })

// console.log("Hello 2");


console.log("Hello1");

const fileReader = async() =>{

    try 
    {
        const data  = await fsModuleAsync.readFile(filePath , "utf-8");
        console.log(data);
    }
    catch(err)
    {
        console.log("error while reading",err);
    }
}

fileReader();

console.log("Hello2");