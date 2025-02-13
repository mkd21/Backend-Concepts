
const pathModule = require("path");

const fsModule = require("fs");


// the fs module is used to create the files , read the files , update the files and delete the file 

// lets try to write something into an existing file 


let dirPath = __dirname;    // got the directory path
let createdFile = "fs-module-example-1.txt";  // created a file

let combinedPath = pathModule.join(dirPath , createdFile);  // linked that file to the directory


// now i will write inside that file using fs module 

// writeFileSync method 
// try 
// {
//     fsModule.writeFileSync(combinedPath , "text written with the help of fs module writeFileSync method" , "utf-8");
//     console.log("file written successfully");
// }
// catch(e)
// {
//     console.log("an error occured" , e);
// }


// in the below case the file is non existing, so the file will be created to the directory we are currently present 
try 
{
    fsModule.writeFileSync("test.txt" , "created a file and entered the data, all by using writeFileSync method" , "utf-8");
}
catch(err)
{
    console.log("error occured",err);
}


// now creating the contents of the file 

// first i will read the file which was existing 



// readFileSync   

const receivedData =  fsModule.readFileSync(combinedPath , "utf-8");
// console.log(receivedData);


// now i will try to read the file that was created by writeFileSync method 

const receivedData2 = fsModule.readFileSync("test.txt" , "utf-8");
// console.log(receivedData2);



// i created a folder named test-folder inside the fs-module. now i will create a file inside that test-folder and write some texts inside the file

const connectedPath = pathModule.join(__dirname , "test-folder" , "test-folder1.txt");
// console.log(connectedPath);

// try 
// {
//     fsModule.writeFileSync(connectedPath , "written from fs-module folder");
// }
// catch(err) 
// {
//     console.log(err);
// }




// delete a file we have a function named unlinkSync()

// try 
// {
//     fsModule.unlinkSync("./test.txt");
// }
// catch(err)
// {
//     console.log('error occured',err);
// }


// rename method --> when doing changes in the same file

// try 
// {
//     fsModule.renameSync("./test.txt" , "updatedTest.txt");
// }
// catch(err)
// {
//     console.log("error generated",err);
// }

// rename method ---> when doing changes in the different files

const oldFilePath = pathModule.join(__dirname , "test-folder" , "test-folder1.txt"); // will connect the old file path
const newFilePath = pathModule.join(__dirname , "test-folder" , "test-folder1_updated.txt");  // connected the new file path

// try 
// {
//     fsModule.renameSync(oldFilePath , newFilePath);
// }
// catch(Err)
// {
//     console.log("error occured",Err);
// }

