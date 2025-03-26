
document.addEventListener("DOMContentLoaded" , () =>{

    const formParent = document.getElementById("formSection");

    const fetch_Links_CustomName = async() =>{
        
        const res = await fetch("/getData");
        const meaningfulData = await res.json();

        console.log(meaningfulData);
        const container = document.getElementById("linksDisplayArea");

        for(const [customName , url] of Object.entries(meaningfulData))
        {
            const li = document.createElement("li");
        
            li.innerHTML = ` <a href="/${customName}" target = "_blank"> ${window.location.origin}/${customName} </a> - ${url} `;

            container.append(li);
        }
    }
    
    formParent.addEventListener("submit" , async(event) =>{

        event.preventDefault();
        
        const formDataObj = new FormData(formParent);
        const url = formDataObj.get("url");
        const customName = formDataObj.get("userCustomURLname");

        try
        {
            const res = await fetch("/shortenUrl" , {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({url , customName})
            });

            if(res.ok)
            {
                alert("form submitted successfully");
                fetch_Links_CustomName();
            }
            else
            {
                const errMessage = await res.text();
                alert(errMessage);
            }
        }
        catch(err)
        {
            console.log("error is",err.message);
        }
    });

    fetch_Links_CustomName();
});