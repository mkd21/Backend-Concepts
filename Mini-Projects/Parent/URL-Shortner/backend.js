
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import httpModule from "http";

import fsModule from "fs/promises";

import path from "path";


const checkRedundancy = async(filePath_dataStorage , newEntry) =>{

    let {url , customName} = newEntry;

    let jsonParentObj = {};

    try 
    {
        const fileContent = await fsModule.readFile(filePath_dataStorage , "utf-8");
        if(fileContent)
        {
            jsonParentObj = JSON.parse(fileContent);
        }
    }
    catch(err)
    {
        console.log("err is",err.message);
    }

    // a check for avoiding the redundant custom name 
    
    if(jsonParentObj[customName])
    {
        throw new Error("Name already exist, please select some other name");
    }

    jsonParentObj[customName] = {url : url };
    return jsonParentObj;
}

const server = httpModule.createServer( async (req , res) =>{

    if(req.method == "GET")
    {
        try 
        {
            let filePath = "";
            let contentType = "text/plain";
            let fileData = "";
            if(req.url == "/"){
                filePath = path.join(__dirname ,  "frontend-folder" , "index.html");
                fileData = await fsModule.readFile(filePath);
                contentType = "text/html";
            }
            else if(req.url.startsWith("/customJS/")){
                filePath = path.join( __dirname , "customJS" , req.url.slice(10));
                fileData = await fsModule.readFile(filePath);
                contentType = "application/javascript";
            }
            else if(req.url == "/style.css"){
                filePath = path.join( __dirname , "frontend-folder" , "style.css");
                fileData = await fsModule.readFile(filePath);
                contentType = "text/css";
            }

            res.writeHead(200 , {"Content-Type" : contentType});
            res.end(fileData);
        }
        catch(err)
        {
            res.writeHead(404 , {"Content-Type" : "text/plain"})
            res.end(err.message);
        }
    }
    else if(req.method == "POST")
    {
        if(req.url == "/shortenUrl")
        {
                let data = "";
                req.on("data" , (chunkedData) => data += chunkedData);

                req.on("end" , async() =>{

                    try
                    {
                        let newEntry = JSON.parse(data);
                        const {url} = newEntry;

                        if(!url)
                        {
                            res.writeHead(400 , {"Content-Type" : "text/plain"});
                            return res.end("Please check the url");
                        }

                        const filePath_dataStorage = path.join(__dirname , "userData" , "data.json");
                        
                        // function for checking redundant username and putting data into a single json object
                        
                        const detailedObj = await checkRedundancy(filePath_dataStorage , newEntry);
                        
                        const stringifiedData = JSON.stringify(detailedObj , null , 4);

                        console.log("data returned from above function is",stringifiedData);

                        await fsModule.writeFile(filePath_dataStorage , stringifiedData);

                        res.writeHead(200 , {"Content-Type" : "application/json"});
                        res.end(JSON.stringify({status : 200 , stringifiedData}));
                    }
                    catch(err)
                    {
                        console.log("error occured while writing the file",err);
                        res.writeHead(404 , {"Content-Type" : "text/plain"});
                        res.end(err.message);
                    }
                    
                });
        }
    }
    else
    {
        res.writeHead(405 , {"Content-Type" : "text/plain"});
        res.end("method not allowed");
    }
});

server.listen(3200 , () =>{
    console.log("server running");
})