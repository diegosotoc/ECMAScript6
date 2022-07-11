/**
 * Spread Operator:
 * Sirve para extraer algo del objeto y dejarlo por fuera.
*/
const obj = {
    name1: 'Oscar',
    age: 32,
    country: 'MX'
};

let { name1, ...addInfo } = obj;
console.log(`name: ${name1}`);
console.log(addInfo);
console.log(`additional information: `, addInfo);



// tambien se pueden añadir objetos a objetos gracias a los "..."
const obj1 = {
    name1: 'Oscar',
};
const obj2 = {
    ...obj1,
    country: 'MX',
};

console.log(obj2);


// Mostrar que no hay errores en promesa
const promise = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => {resolve("PROMISE!")}, 3000) //timeout de 3s
        : reject(new Error("Test error"))
    });
}

promise()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizo")) //Mostrar que no hay un error.



// REGEX

// Basicamente se define una especie de formato de fecha.
                    // año        mes       
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-218');

const year = match[1]; //match al primer grupo del regex (anyio)
const month = match[2]; // segundo...
const day = match[3]; // tercero...
console.log('Date -> ', year, month, day);
