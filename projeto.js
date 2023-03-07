let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let confirmar = document.querySelector("confirmar");

confirmar.addEventListener("click", (event)=>{
    if(email.value == "leojjackson@outlook.com" && senha.value == 123456){
        console.log("worked...")
    }
})