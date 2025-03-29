class Cadastro {
  validar() {
    let senha = document.querySelector("#senha");
    let email = document.querySelector("#email");
    let obj = {}
    obj.Email = document.querySelector("#email").value;
    obj.Senha =  document.querySelector("#senha").value;
    console.log(obj);
    
    if(email.value == "" && senha.value == '123'){
        
        window.location =  "http://127.0.0.1:5500/pagina2.html"; // http:// é importante para abrir em um site válido.
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

let btnVoltar = document.getElementById('btnVoltar')

function voltar() {
    
    window.location = 'http://127.0.0.1:5500/index.html';
    
}
