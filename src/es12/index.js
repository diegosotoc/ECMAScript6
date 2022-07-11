// Se puede usar para bloquear palabras o cambiarlas.

const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web'
const replacedString = string.replace("JavaScript", "Python")


const replacedString2 = string.replaceAll("JavaScript", "Python")

console.log(replacedString2);


// Metodos privados en una clase.

class Clase {
    #private(valor){
      console.log(valor)
    }
    
    public(valor){
      console.log(valor)
    }
  }
  
  const clase = new Clase()
  clase.public("Hola")  // 'Hola'
  clase.private("Hola") // TypeError: clase.private is not a function




// Promise.any() es otra forma de manejar varias promesas, 
// que retornará la primera promesa que sea resuelta y se rechazará si todas las promesas son rechazadas.
const promise1=new Promise((resolve,reject)=>reject("1"));
const promise2=new Promise((resolve,reject)=>resolve("2"));
const promise3=new Promise((resolve,reject)=>resolve("3"));

Promise.Any([promisel,promise2,promise3])
    .then(response => console.log(response))
