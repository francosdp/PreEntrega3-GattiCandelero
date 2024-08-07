// Efectos de la distancia
const distance1 = {
    meters: "100 a 200 metros.",
    distanceObjId: 155,
    reducedShock: 1,
    reducedPenetration: 1,
    reducedDamage: 0.1,
}
const distance2 = {
    meters: "200 a 300 mts.",
    distanceObjId: 156,
    reducedShock: 1.5,
    reducedPenetration: 1.3,
    reducedDamage: 1.4,
}
const distance3 = {
    meters: "300 a 400 mts.",
    distanceObjId: 157,
    reducedShock: 1.8,
    reducedPenetration: 1.5,
    reducedDamage: 1.5,
}
const distance4 = {
    meters: "400 a 500 mts.",
    distanceObjId: 158,
    reducedShock: 2,
    reducedPenetration: 1.7,
    reducedDamage: 1.7,
}
const distance5 = {
    meters: "500 a 600 mts.",
    distanceObjId: 159,
    reducedShock: 2.4,
    reducedPenetration: 2,
    reducedDamage: 1.9,
}
const distance6 = {
    meters: "600 a 700 mts.",
    distanceObjId: 160,
    reducedShock: 2.6,
    reducedPenetration: 2.1,
    reducedDamage: 2,
}
const distance7 = {
    meters: "+700 mts.",
    distanceObjId: 161,
    reducedShock: 3,
    reducedPenetration: 2.5,
    reducedDamage: 2.3,
}

const distances = [distance1, distance2, distance3, distance4, distance5, distance6, distance7]

// Este es un array de objetos en JavaScript  

// Convertimos el array a JSON  
const jsonString = JSON.stringify(distances);  

// Mostramos el resultado  
console.log(jsonString);  
