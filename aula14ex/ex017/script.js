function gerar() {
    
    var num = document.getElementById('num')
    var res = document.getElementById('res')
    res.innerHTML = ''
    if (num.value.length == 0) {
        window.alert('Digite um número!')
    } else {
        var n = Number(num.value)
    }
    
    for (var c = 0; c <= 10; c++) {
        var resposta = c * n
        var item = document.createElement('option')
        item.text = `${c} x ${n} = ${c*n}`
        item.value = `res.${c}` 
        res.appendChild(item)
    }
    
}
