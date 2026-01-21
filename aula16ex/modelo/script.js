
let valores = []
let res = document.getElementById('res')
function adicionar() {
    res.innerHTML = ''
    let num = document.getElementById('num')
    let numeros = document.getElementById('numeros')
    let n = Number(num.value)
    let pos = valores.indexOf(n)
    if(pos == -1 && n >= 1 && n <= 100) {
        valores.push(n)
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        numeros.appendChild(item)
    } else {
        window.alert('Valor inválido ou já existente!')
    }
}

function finalizar() {
    res.innerHTML = ''
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        
        let maiorN = valores[0]
        let menorN = valores[0]
        let soma = 0
        let media = 0
        for (let c = 0; c < valores.length; c++) {
            if (valores[c] > maiorN) {
                maiorN = valores[c]
            } else if (valores[c] < menorN) {
                menorN = valores[c]
            }

            soma += valores[c]
            media = soma / valores.length
        }

        res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados <br>
        O maior valor informado foi o ${maiorN} <br>
        O menor valor informado foi o ${menorN} <br>
        Somando todos os valores, temos ${soma} <br>
        A média dos valores é ${media}`
    }
}