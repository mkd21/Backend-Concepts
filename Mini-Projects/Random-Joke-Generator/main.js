
import chalk from "chalk";
import httpModule from "https";


const randomJokeFetcher = () =>{

    const url = "https://official-joke-api.appspot.com/jokes/random";

    httpModule.get(url , (res) =>{

        let data = "";

        res.on("data" , (chunkedData) =>{
            data += chunkedData;
        });

        res.on("end" , () =>{
            let usefulData = JSON.parse(data);
            console.log(usefulData);

            console.log( chalk.blue.bold( usefulData.setup));
            console.log( chalk.green.bgRed.bold( usefulData.punchline));
        });

        res.on("error" , (Err) =>{
            console.log("error is", Err.message);
        })
    })

}


randomJokeFetcher();