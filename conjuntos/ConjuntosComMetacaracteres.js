const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]/g)) //  não precisa de escape '/'dentro do conjunto.
console.log(texto.match(/[$-?]/g))

//não é um intervalo
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))