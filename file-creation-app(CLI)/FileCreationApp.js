
import ReadLineModule from "readline";

import FileSystemModule from "fs";


const RL = ReadLineModule.createInterface({
    input : process.stdin,
    output : process.stdout
});


function fileCreation()
{
    RL.question("Name of the file you want to create: " , (fileName) =>{
        RL.question("Contents of the file: ", (fileContent) =>{
            
            FileSystemModule.writeFile(`${fileName}.txt` , fileContent , (err) =>{
                if(err) console.log("error is",err.message);

                console.log("file created and written successfullly");
                RL.close();
            });

        })
    })
}


fileCreation();