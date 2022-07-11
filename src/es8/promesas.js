const helloWorld = () => { // Se crea la funcion con arrow

    return new Promise((resolve, reject) => {
        (false)
        // forma de resumir un if/else en una sola linea
        ? setTimeout(() => resolve("Hello World"), 3000) //Segundo dato es el tiempo
        : reject(new Error("Test Error"))
    })
}


const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();


// mejor forma de manejar errores
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction()
