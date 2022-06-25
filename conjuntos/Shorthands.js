const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

// números de [0-9]
console.log(texto.match(/\d/g))
//Não números [^0-9]
console.log(texto.match(/\D/g))

// caracteres [A-Za-z0-9_]
console.log(texto.match(/\w/g))
// caracteres [^A-Za-z0-9_]
console.log(texto.match(/\W/g))

// caracteres [\t\n\r\f]
console.log(texto.match(/\s/g))

// caracteres [^ \t\n\r\f]
console.log(texto.match(/\S/g))




