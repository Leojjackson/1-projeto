let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let confirmar = document.querySelector("confirmar");

function clicar(){

    if(email.value == "leojjackson@outlook.com" && senha.value == 123456){
        
        console.log("worked...")
    }
    else{
        window.location = "http://127.0.0.1:5500/pagina2.html"
        console.log("didn't work")
    }
}