
document.addEventListener("DOMContentLoaded" , () =>{

    const formParent = document.getElementById("formSection");

    
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
    })
});