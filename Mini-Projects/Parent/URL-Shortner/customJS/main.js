
document.addEventListener("DOMContentLoaded" , () =>{

    const formParent = document.getElementById("formSection");

    
    const submitButton = document.querySelector(".submitButton");
    
    submitButton.addEventListener("click" , (event) =>{
        console.log("executed");
        event.preventDefault();
        
        const formDataObj = new FormData(formParent);
        const url = formDataObj.get("url");
        const customName = formDataObj.get("userCustomURLname");

        console.log(url , customName);
    })
});