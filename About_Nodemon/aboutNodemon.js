
const http = require("http");

const server = http.createServer( (req , res) =>{

    if(req.url == "/")
    {
        res.setHeader("content-type" , "text/plain");
        res.write("Hello and welcome to node world without nodemon update");
        res.end();
    }
    if(req.url == "/htmlpages")
    {
        res.setHeader("content-type" , "text/html");
        res.write("<h1> Hello and welcome to our website");
        res.end();
    }
});


server.listen(3000 , () =>{
    console.log("server started");
});