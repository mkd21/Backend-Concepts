
import { fileURLToPath } from 'url';
import path from 'path';

import * as fsModule from "fs";


// getting the directory path

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const filePathToRead = path.join(__dirname , "readFile.txt");      // just the file path

const readStream = fsModule.createReadStream(filePathToRead, "utf-8");   // file path to read the data in the form of chunks

const filePathToWrite = path.join(__dirname , "writeFile.txt");        // just the file path

const writeStream = fsModule.createWriteStream(filePathToWrite);      //  stream created for us to write the data in small chunks

// this "on" event will execute the method inside, when data will be available 
readStream.on("data" , (chunkedData) =>{
    console.log(chunkedData);

    // when data will be available then we will execute the command 
    writeStream.write(chunkedData);
});