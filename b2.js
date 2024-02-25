const ejercicio2 = require("prompt-sync")({siginit: true})

console.log("Introduce 'contar' para contar los números en tu cadena de textos: ")

let texto = ejercicio2("Introduce el texto --> ")

let cadena= "";

while (texto !== "contar") {

    cadena = cadena + texto

    texto = ejercicio2("Introduce el texto --> ")
}

console.log("Esta es la cadena de textos --> " + cadena )

let totalNumeros = 0

    for (let i = 0; i < cadena.length; i++) {
         if (
            cadena.charAt(i) === "0" ||
            cadena.charAt(i) === "1" ||
            cadena.charAt(i) === "2" ||
            cadena.charAt(i) === "3" ||
            cadena.charAt(i) === "4" ||
            cadena.charAt(i) === "5" ||
            cadena.charAt(i) === "6" ||
            cadena.charAt(i) === "7" ||
            cadena.charAt(i) === "8" ||
            cadena.charAt(i) === "9" 
          ) {
            totalNumeros = totalNumeros + 1
         }
    }
    console.log("El texto tiene " + totalNumeros + " números")