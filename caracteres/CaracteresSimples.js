const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/
//Vai separar o texto toda vez que achar uma virgula.
console.log(texto.split(regexVirgula))
//vai retornar a primeira virgula que encontrar no texto.
console.log(texto.match(regexVirgula))
//Aqui diferente do exemplo acima com a flag g ele vai retornar todas as virgulas do texto.
console.log(texto.match(/,/g))
//Procurar a letra A maiscula em todo o texto.
console.log(texto.match(/A/g))
//Procurar a letra A tanto maiscula ou menuscula pela flag i em todo o texto.
console.log(texto.match(/A/gi))
//Procurar o número dois em todo o texto
console.log(texto.match(/2/g))
//Procurando "b c!d" no texto
console.log(texto.match(/b c!d/))