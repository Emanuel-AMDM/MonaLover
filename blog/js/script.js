function comentar(){
    var comentario = document.querySelector('textarea#comentario')
    var gerar      = document.querySelector('div#gerar_comentario')

    if(comentario.value != ''){
        var item = document.createElement('textarea')

        item.innerHTML = `${comentario}`

        gerar.appendChild(item)
    }
}