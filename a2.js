const a1 = require("prompt-sync")({ siginit: true });

let sumaCadenas = '';
let totalNoVocales = 0;

while (true) {
    const cadena = a1('Introduce una cadena de texto (o presiona Enter para terminar): ');
    if (cadena === '') {
        break;
    }
    sumaCadenas += cadena;
}

for (let i = 0; i < sumaCadenas.length; i++) {
    const caracter = sumaCadenas[i].toLowerCase();
    if (caracter !== 'a' && caracter !== 'e' && caracter !== 'i' && caracter !== 'o' && caracter !== 'u' && caracter !== ' ') {
        totalNoVocales++;
    }
}

console.log(`La suma de tus cadenas es: ${sumaCadenas}`);
console.log(`Los caracteres que no son vocales suman: ${totalNoVocales}`);
