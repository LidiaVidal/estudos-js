
var msg = document.getElementById('msg')
var btn = document.querySelector('#btn')
function verificar(event) {
    event.preventDefault()
    var anoNasc = document.getElementById('ano').value
    var sexo = document.getElementsByName('Sexo') 
    var ano = new Date()
    var anoAtual = ano.getFullYear()
    var genero = ''
    if (sexo[0].checked) {
        genero = 'homem'
    } else if (sexo[1].checked){
        genero = 'mulher'
    }
    var idade = anoAtual - anoNasc
    msg.innerHTML = `Verificamos ${genero} de ${idade} anos`
}
btn.addEventListener('click', verificar)