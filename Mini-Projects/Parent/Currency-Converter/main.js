
import httpsModule from "https";

import readLineModule from "readline";


function getCurrentRate()
{
    const url = "https://v6.exchangerate-api.com/v6/df5d5271756ed7756917779f/latest/USD";

    const converter = (amount , countrySelected , currentRates) =>{

        if(currentRates[countrySelected.toUpperCase()])
        {
            return (amount * currentRates[countrySelected.toUpperCase()]).toFixed(2);
        }
        else return undefined;
    }

    httpsModule.get(url , (resp) =>{

        let data = "";
        resp.on("data" , (chunkedData) =>{
            data += chunkedData;
        });

        resp.on("end" , () =>{
            const currentRates = JSON.parse(data).conversion_rates;
            // console.log(currentRates);

            const rl = readLineModule.createInterface({
                input : process.stdin,
                output : process.stdout
            });

            rl.question("Enter the currency in USD: " , (amount) =>{
                
                rl.question("Enter the currency you want to convert to eg(INR , USD , EUR , CAD): " , (countrySelected) =>{
                    const currentValueOfCurrencyOfSelectedCountry = converter(amount , countrySelected , currentRates);

                    if(currentValueOfCurrencyOfSelectedCountry)
                    {
                        console.log(`The current value of ${amount} USD is ${currentValueOfCurrencyOfSelectedCountry.toUpperCase()} ${countrySelected}`);
                    }
                    else
                    {
                        console.log("Please select valid country name for conversion");
                    }
                    rl.close();
                });

            })
        });

        resp.on("error" , (err) =>{
            console.log("error is", err.message);
        });

    });
}

getCurrentRate();