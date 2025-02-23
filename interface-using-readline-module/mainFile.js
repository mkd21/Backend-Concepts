
import ReadLineModule, { createInterface } from "readline";

const readLine = ReadLineModule.createInterface({
    input : process.stdin,
    output : process.stdout
});


const todos = [];

function handleResponse(response)
{
    switch (response){

        case "1":
            readLine.question("Please add a task: " , (resp) => {
                todos.push(resp);
                console.log("task added to todo is",resp);
                showOptions();
            });
            break;
        
        case "2":
            console.log("\n Tasks present in the Todo List are :------------");
            todos.forEach( (iter , idx) => console.log( `${idx + 1} ${iter}`) );
            console.log("-------------------------");
            showOptions();
            break;

        case "3":
            console.log("Exit Command Selected");
            readLine.close();
            break;
        
        default :
            console.log("invalid option selected. Please select a valid option");
            showOptions();
    }
}

function showOptions()
{
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    console.log("Press 1 to add a todo");
    console.log("Press 2 to see the tasks");
    console.log("Press 3 to exit");
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

    readLine.question("Choose Option " , handleResponse);
}

showOptions();