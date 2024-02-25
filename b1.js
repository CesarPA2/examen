const ejercicio1 = require("prompt-sync")({siginit: true})

const años = ejercicio1("Introduce los años que va a durar la inversión --> ")
const capInicial = ejercicio1("Introduce el capital inicial para la inversión --> ")
const interes = ejercicio1("Introduce el interés de la inversión --> ")

const aleatoriedad = Math.floor(Math.random()*11)


    let intAnual = Number(capInicial) * (Number(interes)/100)
    console.log("El interés anual es --> " + intAnual)


    let capTotal = Number(capInicial)+(intAnual*Number(años))
    console.log("El capital total al terminar la inversión será --> " + capTotal)

    console.log("La aleatoriedad ha sido --> " + aleatoriedad)

    let capFinal = (capTotal*(aleatoriedad/100)+capTotal)
    console.log("El capital total será --> " + capFinal)