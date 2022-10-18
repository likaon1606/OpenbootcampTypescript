// Console Log

import { group } from "console";

console.log("Hola");

let lista = ["uno", "dos", "tres"];

lista.forEach((_) => console.log);

let nombre = "Martín";

console.log(`Hola ${nombre}`);

// Console Clear -> Borrar toda la consola
console.clear();

// Console Assert -> validar algo, solo si es igual se ejecuta, si no es igual no se ejecuta
var a: number = 100;

console.assert(a === 1000, "Mensaje", `Otro mensaje: ${a}`);

// Console Count -> mostrar un valor que se vaya incrementando
function contador(texto: string){
  console.count(texto);
}

contador("Hola"); // 1
contador("Adiós"); // 1

contador("Hola"); // 2 cuenta las veces que se repite esa palabra

console.countReset();// reseteo del contador

// Console Info, Warn o Error
console.info("Texto informativo");
console.warn("Texto de aviso");
console.error("Texto de error");

// Console Trace -> trazar una ejecución

function uno(){
  dos();
}

function dos (){
  tres();
}

function tres(){
  console.trace(); // Trazar por donde se ha ido ejecutando para llegar a este punto 
}

uno(); // inicia el trace por consola

// Console DIR -> Mostrar valores de objetos de manera elegante
let coche = {
  nombre: "Audi",
  matricula: "sda342",
  especificaciones: [
    {
      motor: "v12",
      potencia: "300cv"
    }
  ]
}

console.dir(coche);

// Console Table -> formato tabla
console.table(coche);

// Console.time Contabilizar el tiempo de ejecución
function espera(){
  for (let index = 0; index < 1000; index++) {
    //...
  }
}

console.time("Prueba"); // inica el cronómetro
espera();
console.timeEnd("Prueba");// terminar y contabilizar el tiempo que ha pasado

// Console.group Agrupaciones
console.group("Números");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd();

















