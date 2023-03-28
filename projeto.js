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
        document.querySelector("#email").value = "";
        document.querySelector("#senha").value = "";
    }
}
}
let cadastro = new Cadastro();
