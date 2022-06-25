const texto = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joão@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
`
let regex = /[\wã.]+@\w+\.\w{2,4}\.?\w{0,2}/g
console.log(texto.match(regex))