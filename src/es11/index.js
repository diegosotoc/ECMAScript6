// Dynamic import ( importación dinámica)

// Permite llamar nuestro código cuando lo necesitemos.

// El archivo no se va a cargar de manera automatica.

// Con esto podremos dividir nuestro codigo y evitar que la app sea muy grande.

// Por todo lo anterior, mejora la performance. 

const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import('./files.js');
    module.hello();
});




// Integers muy grandes
const aBigNumber = 900719925474099111111111n;

const anotherBigNumber = BigInt(9007199254740991n);

console.log(aBigNumber);
console.log(anotherBigNumber);



// Promise all

const promise1 = new Promise((resolve, reject) => {
    reject("reject");
})
const promise2 = new Promise((resolve, reject) => {
    resolve("resolve");
})
const promise3 = new Promise((resolve, reject) => {
    resolve("resolve 2");
})

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response))


// ?? significa si el valor es nulo...
// pone el valor default
// si es otra cosa, pone el valor del fooo
const fooo = null ?? 'default string';
const foo = 'string' ?? 'default string';
console.log(fooo);
console.log(foo);

// Encapsulamiento opcional
const user={};
console.log(user?.profile?.email); // esta devulve undefined, pero no rompe la app
// console.log(user.profile.email); //esta lanza error y me romperia mi aplicacion

// como implementarlo...
if(user?.profile ?. email){
    console.log('email')
} else{
    console.log('fail');
}