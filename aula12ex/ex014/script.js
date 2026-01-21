function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var root = window.document.getElementById('root')
    var dia = new Date()
    var hora = dia.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora > 0 && hora < 12) {
        img.src = 'assets/manha.png'
        document.body.style.background = '#d7a61c'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'assets/tarde.png'
        document.body.style.background = '#f98755'
    } else {
        img.src = 'assets/noite.png'
        document.body.style.background = '#0f233f'
    }
}


