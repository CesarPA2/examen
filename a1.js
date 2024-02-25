const a1 = require("prompt-sync")({ siginit: true });

const tipoCaras = a1("Introduce el tipo de caras (6 o 10): ");
const numDados = a1("Introduce el número de dados: ");

// Comprobamos que el usuario ha introducido valores válidos
if (tipoCaras !== "6" && tipoCaras !== "10") {
    console.log("Error: El tipo de caras debe ser 6 o 10.");
} else if (isNaN(numDados) || numDados <= 0) {
    console.log("Error: El número de dados debe ser un número mayor que cero.");
} else {
    console.log(`Has tirado ${numDados} dados de ${tipoCaras} caras.`);

    let resultados = [];
    let suma = 0;

    // Tiramos los dados y almacenamos los resultados
    for (let i = 0; i < numDados; i++) {
        const resultado = Math.floor(Math.random() * parseInt(tipoCaras)) + 1;
        resultados.push(resultado);
        suma += resultado;
    }

    console.log("Los resultados han sido:", resultados.join(" ")); // Mostramos los resultados separados por espacio
    console.log("El total es", suma);
}


