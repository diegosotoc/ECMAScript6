// Como antiguamente se trabajaba en JS.
// Ambas funciones realizan lo mismo. 
function newFuncion(name, city) {
    var name = name || "Diego";
    var city = city || "Alajuela";
    console.log(name,city);

}

// Como se realiza en ES6
function newFuncion2(name = "Diego", city = "Alahell") {
    console.log(name,city);
}


newFuncion2("Diego es6","Alahell es6");


// Concatenar frases.
let hello ="Hello";
let world ="World";
let frase = hello + " " + world;
console.log(frase);

// ES6: Template literals.

let fraseES6 = `${hello} ${world}`;
console.log(fraseES6);




// Como se hacian los saltos de linea antes.
let lorem = "Qui consequatur.Commodi.Ipsum vel duis yet minima\n"
+"otra frase epica que necesitamos."

// ES6 Saltos de linea
let loremES6 = `Frase de prueba
esto hace saltos de linea
de una manera mas facil
wao
`
console.log(lorem);
console.log(loremES6);


// Desestruaracion de objetos

let producto = {
    id: '38469238976',
    nombre: 'café',
    precio: 2.50
};

// Forma antigua
console.log(producto.id, producto.nombre, producto.precio);
// Desestructuración en ES6
let { id, nombre, precio } = producto;
console.log(id, nombre, precio);



// como unir elementos en ES6.
let team1=['Oscar','Julian','Ricardo','Ricardo2'];
let team2=['Valeria','Yesica','Camila'];

let education=['David',... team1,... team2];



console.log(education);


// Scope de variables.
// Let solo está disponible en el mismo bloque de código.
{
 var globalVar = "Global Var";
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalVar);







let name1 = "diego";
let age = 21 ;

obj = {name: name1, age: age};

// ES6
obj2 = {name1, age};


// Arrow Functions

const names = [
    {name: "Diego", age: 32},
    {name: 'Oscar', age: 32},
]

// Manera normal
let listOfNames1 = names.map(
    function(item){
    console.log(item.name);
})

// ES6
let listOfNames2 = names.map(
    item => console.log(item.name)
)



// const listOfNames3 = (name, age, country)

// arrow functions
const listOfNames4 = name => {

}

// Promesas... Cosas que van a pasar
const hellowPromise = () =>{

    return new Promise((resolve,reject) => {

        if (true) {
            resolve("Hey!")
        } else {
            reject("Ups!")
        }
    })
}

hellowPromise()
    .then(response => console.log(response))
    .then(()=> console.log("Hola"))
    .catch(error => console.log(error))




class calculator
{
    constructor()
    {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB)
    {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA+this.valueB;
    }
}


const calc = new calculator();
console.log(calc.sum(2,2));


import { hello } from "./module";

console.log(hello());


// Generadores
function* helloWorld(){
    if(true)
    {
        yield 'Hello,';
    }
    if(true)
    {
        yield 'World';
    }

}

const generatorHello = helloWorld();


console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);



















