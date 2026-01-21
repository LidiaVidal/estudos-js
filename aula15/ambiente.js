let num = [5, 4, 10]
num[3] = 6
num.push(1) 
num.push(9) 
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)

//Mostrando todos os vetores na tela
/*for(var c = 0; c < num.length ; c++) {
    console.log(`O valor na posição ${c} é ${num[c]}`)
} */

for (let pos in num) {
    console.log(`O valor na posição ${pos} é ${num[pos]}`)
}    