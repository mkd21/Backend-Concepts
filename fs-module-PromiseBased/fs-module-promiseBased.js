
const pathModule = require("path");

const fsModule = require("fs");

const linkFolder1 = pathModule.join(__dirname , "folder1");
const linkFileInsideFolder1 = pathModule.join(linkFolder1 , "folder-1-file.txt");


// writing in the file 
// fsModule.promises
// .writeFile(linkFileInsideFolder1 , "data made available using promise based fs module writeFile method")
// .then((data) => console.log("Data added successfully"))
// .catch((err) => console.log(err));


// reading the file 

// fsModule.promises
// .readFile(linkFileInsideFolder1 , "utf-8")
// .then( (receivedData) => console.log(receivedData))
// .catch( (err) => console.log("error message is",err));



// updating the content in a file 

fsModule.promises
.appendFile(linkFileInsideFolder1 , "\nfile contents updated by using appendFile method")
.then((res) => console.log("data updated successfully"))
.catch((res) => console.log("error while updating data inside the file",res));