

const http = require("http");

const server = http.createServer( (req , res) =>{

    if(req.url == "/")
    {
        res.setHeader("content-type", "text/html");
        res.write("<h1> Hello Welcome to my portfolio </h1>");
        res.end();
    }
    if(req.url == "/about")
    {
        res.write("I am Mayank Deep, Fullstack Developer");
        res.end();
    }
});

server.listen(3000 , () =>{
    console.log("server started...");
})