class Cadastro {
  validar() {
    let senha = document.querySelector("#senha");
    let email = document.querySelector("#email");
    let obj = {}
    console.log(obj);
    obj.Email = document.querySelector("#email").value;
    obj.Senha =  document.querySelector("#senha").value;
    
    if(email.value == "leojjackson@outlook.com" && senha.value == 123456){
        window.location =  "http://127.0.0.1:5500/pagina2.html";
    }else{
        alert(" [ERROR] Usuario desconhecido")
        console.log("didn't work")
    }
}
}
let cadastro = new Cadastro();

// let senha = document.querySelector("#senha");
// let confirmar = document.querySelector("confirmar");

// function clicar(){

//     if(email.value == "leojjackson@outlook.com" && senha.value == 123456){

//         window.location = "http://127.0.0.1:5500/pagina2.html";

//         console.log("worked...");
//     }
//     else{
//         alert(" [ERROR] Usuario desconhecido")
//         console.log("didn't work")
//     }
// }
