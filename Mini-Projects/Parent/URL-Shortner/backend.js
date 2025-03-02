
import httpModule from "http";

import fsModule from "fs/promises";

import path from "path";


const server = httpModule.createServer( async (req , res) =>{

    if(req.method == "GET")
    {
        try 
        {
            let filePath = "";
            let contentType = "text/plain";
            let fileData = "";
            if(req.url == "/"){
                filePath = path.join("frontend-folder" , "index.html");
                fileData = await fsModule.readFile(filePath);
                contentType = "text/html";
            }
            else if(req.url.startsWith("/customJS/")){
                filePath = path.join("customJS" , req.url.slice(10));
                fileData = await fsModule.readFile(filePath);
                contentType = "application/javascript";
            }
            else if(req.url == "/style.css"){
                filePath = path.join("frontend-folder" , "style.css");
                fileData = await fsModule.readFile(filePath);
                contentType = "text/css";
            }
            console.log(filePath);

            res.writeHead(200 , {"Content-Type" : contentType});
            res.end(fileData);
        }
        catch(err)
        {
            res.writeHead(404 , {"Content-Type" : "text/plain"})
            res.end(err.message);
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
