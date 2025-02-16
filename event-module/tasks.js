
// listen for different events ie login  , logout , purchase , profile update 

// keep a track of events

// for user login 

const eventsClass = require("events");

const eventObj = new eventsClass();


const pathModule = require("path");

const fsModule = require("fs");

const summaryObjectFilePath = pathModule.join(__dirname , "eventSummaryCount.json");

const summaryManager = (action) =>{

    if(action == "logged in")
    {
        const data = fsModule.readFileSync(summaryObjectFilePath , "utf-8");
        let usefulData = JSON.parse(data);
        usefulData["log-in"] += 1;
        fsModule.writeFileSync(summaryObjectFilePath , JSON.stringify(usefulData , null , 2) , "utf-8"); 
        // console.log(data);
    }
    else if(action == "logged out")
    {
        const usefulData = JSON.parse(fsModule.readFileSync(summaryObjectFilePath , "utf-8"));
        usefulData["log-out"]++;

        fsModule.writeFileSync(summaryObjectFilePath , JSON.stringify(usefulData , null , 2));

        console.log( fsModule.readFileSync(summaryObjectFilePath , "utf-8"));
    }
}


// for user login 
const loginFacilitator = () =>{
    console.log("logged in");
    
    summaryManager("logged in"); 
}

eventObj.on("loginFunction" , () => {
    loginFacilitator();
});

eventObj.emit("loginFunction");



// for user logout 

function logoutExecutor()
{
    console.log("You are logged out!");
    summaryManager("logged out");
}

eventObj.on("logoutFunction" , logoutExecutor);

eventObj.emit("logoutFunction");