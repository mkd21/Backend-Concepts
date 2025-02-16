
const eventModule = require("events");

const event = new eventModule();



// way 1 

// event.on("greet" , () =>{
//     console.log("Good Evening, Mayank");
// })

// event.emit("greet");


// way 2 

// function welcomeFunction()
// {
//     console.log("Hello");
// }

// event.on("welc", welcomeFunction);

// event.emit("welc");



// way 1
function userDetailsView({name , age , designation})
{
    console.log(name , age , designation);
}


// way 2
function userDetailsView(receivedData)
{
    console.log(receivedData);
}


// way 3
function userDetailsView(...args)
{
    console.log(args);
}

event.on("user" , () => userDetailsView({name : "mayank" , age : "26" , designation : "SDE"}));

// event.emit("user");


