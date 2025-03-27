class Cadastro {
  validar() {
    let senha = document.querySelector("#senha");
    let email = document.querySelector("#email");
    let obj = {}
    obj.Email = document.querySelector("#email").value;
    obj.Senha =  document.querySelector("#senha").value;
    console.log(obj);
    
    if(email.value == "leojjackson@outlook.com" && senha.value == 'Jesus980'){
        
        window.location =  "http://127.0.0.1:5500/pagina2.html";

    }else{
        alert(" [ERROR] Usuario desconhecido")
        console.log("didn't work")
        document.querySelector("#email").value = email.value;
        document.querySelector("#senha").value = senha.value;
        email.focus();
    }
}
}
let cadastro = new Cadastro();
