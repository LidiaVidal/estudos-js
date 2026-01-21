
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtAno')
    var res = document.querySelector('#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fAno.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if (fsex[0].checked) {
            var genero = 'homem'
            if (idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'assets/CH.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'assets/JH.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'assets/AH.png')
            } else {
                //idoso
                img.setAttribute('src', 'assets/IH.png')
            }
        } else if (fsex[1].checked) {
            var genero = 'mulher'
            if (idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'assets/CM.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'assets/JM.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'assets/AM.png')
            } else {
                //idoso
                img.setAttribute('src', 'assets/IM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos`
        console.log("Tentando carregar a imagem: ", img.src);
        res.appendChild(img)

        
    }
}