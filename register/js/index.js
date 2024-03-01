function cadastrar(){
    var nome     = document.querySelector("input#nome")
    var email    = document.querySelector("input#email")
    var nickname = document.querySelector("input#nickname")
    var senha    = document.querySelector("input#senha")
    var resposta = document.querySelector("div#resposta")
    
    if(nome.value == '' || email.value == '' || nickname.value == '' || senha.value == ''){
        alert(`!Por favor, Preencha todos os campos!`)
    }else{
        resposta.innerHTML = `<strong>!Cadastrado com sucesso!</strong>`
    }
}