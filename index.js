//EJEMPLO DE ASINCRONISMO

//funcion de callback
//¿Que se les ocurre algo que puede tardar en ejecutarse?

console.log("tarea 1");

setTimeout(() => console.log("tarea 2"), 2500)

console.log("tarea 3");