let numeros = [2 , 6, 3]
numeros.push(8)
console.log(numeros)
for (let c in numeros) {
    console.log(`O valor da posição ${c} é ${numeros[c]}`)
}

let pos = numeros.indexOf(8)

if (pos == -1) {
    console.log('O valor não está no array')
} else {
    console.log(`O valor está na posição ${pos}`)
}


