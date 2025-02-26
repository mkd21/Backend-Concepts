
import readLine from "readline/promises";

import chalk from "chalk";

const RL = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});


async function getCityWeatherDetails(city)
{
    const API_key = "9af8bcbaea5a2e3ddeef1b03bd13e6f1";

    try 
    {
        const receivedData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
        
        if(!receivedData.ok)
        {
            throw new Error("Please check your city name");
        }
        const usefulData = await receivedData.json();
        
        console.log( chalk.yellow.bold(`Current Temperature of ${usefulData.name} is ${usefulData.main.temp} deg`));
    }
    catch(err)
    {
        console.log("error",err.message);
    }
}

async function getWeather()
{
    const city = await RL.question("Enter your city: ");
    await getCityWeatherDetails(city);
    RL.close();
}

getWeather();