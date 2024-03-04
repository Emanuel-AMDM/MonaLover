function logar(){
    var res   = document.querySelector("div#resposta")
    var login = document.querySelector("input#login")
    var senha = document.querySelector("input#senha")
    
    if(login.value == 'manu' && senha.value == '123'){
        res.innerHTML = `<strong>!Logado com sucesso!</strong>`
        window.location.href = `../blog/index.html`
    }
    else if(login.value == '' || senha.value == ''){
        alert(`!Preencha os campos abaixo!`)
    }else{
        res.innerHTML = `<strong>!Senha ou Login invalido!</strong>`
    }
}

function mostrarSenha(){
    var mostrarsenha = document.querySelector("input#mostrar")
    var senha        = document.querySelector("input#senha")

    if(mostrarsenha.value == 1){
        senha.type = "text"
    }
}