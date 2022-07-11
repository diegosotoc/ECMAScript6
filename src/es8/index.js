// Object.entries me retorna un arreglo con los datos del objeto
const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

const entries = Object.entries(usuario) 
console.log(entries);
console.log(entries.length);

// Esto imprime los valores del objeto, ignora la asignacion
const values = Object.values(usuario);
console.log(values);


// Cómo rellenar un string o padding
// El padding consiste en rellenar un string por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima.

// Este método recibe dos argumentos:

// La longitud máxima a rellenar, incluyendo el string inicial.
// El string para rellenar, por defecto, es un espacio.
// Si la longitud a rellenar es menor que la longitud del string actual, entonces no agregará nada.


// El primer nuevo equivale a la cantidad de chars totales que va a tener el string
'abc'.padStart(10) // "       abc"
'abc'.padStart(10, "foo") // "foofoofabc"
'abc'.padStart(6,"123465") // "123abc"
'abc'.padStart(8, "0") // "00000abc"
'abc'.padStart(1) // "abc"


const string = "Hello";

console.log(string.padEnd(10," ----"));
console.log("food".padEnd(10,"  ----"));
console.log("casa".padEnd(10,"  ----"));


