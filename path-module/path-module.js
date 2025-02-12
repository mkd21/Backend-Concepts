
const path = require("path");

// some useful methods 

// path.join --> joins all the path segments into single path 
const filePath = path.join("Folders" , "DetailsOfStudentFolder" , "Student.txt");
// console.log(filePath);


// path.parse(filePath) --> returns an object containing all the details ie root , base , extension , name of file
const parsedPath = path.parse(filePath);
// console.log(parsedPath);


// to get the specific details about the file we can use below functions 

// path.resolve(filePath) --> gives the absolute path of the file ie from local disc to the file. complete path is given
const resolvedPath = path.resolve(filePath);
// console.log(resolvedPath);



// path.basename(filePath) --> will show the file name
const baseName =  path.basename(filePath);
// console.log(baseName);



// path.extname(filePath)   --> shows the extesnion of the file
const extensionDetails = path.extname(filePath);
// console.log(extensionDetails);


// path.dirname(filePath)   --> shows the directory of the file path
const directory = path.dirname(filePath);
// console.log(directory);


const forwardOrBackSlash_which_is_valid = path.sep;       // will tell which seperator is valid for specific OS
console.log(forwardOrBackSlash_which_is_valid);

