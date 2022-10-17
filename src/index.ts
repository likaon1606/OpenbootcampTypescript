console.log('Hola Ariel');
console.log('Adiós afg');

// Declaración de variables:
let nombre: string = "Ariel";

// console.log("Hola, " + nombre);
// console.log("Que tal,", nombre, "?");
// console.log(`Como estas, ${nombre}`);

let email = "afg@gmail.com"; // Variable local
console.log(`Email de ${nombre} es ${email}`);

const PI: number = 3.1416;

var apellidos: any = "San José"; // any no es buena practica porque cambia a cualquier tipo, es mejor tiparlos según el caracter
apellidos = 3;

var error: boolean; 
error = false;

console.log(`Hay error: ${error}`);

// Instanciacion múltiple de variables

let a:string,b:boolean,c:number; // instancia 3 variables sin valor oficial 

a = "TypeScript";
b = true;
c = 5.9;

// BuiltIn Types: number, string, boolean, void, null, undefined

// Tipo más complejos

// Lsita de cadenas de texto
let listaTareas: string[] = ["Tarea 1", "Tarea 2"];

// Combinaci´n de tipos en listas
let valores: (string | number | boolean)[] = [false, "Hola", true, 56];

// Enumerados
enum Estados {
  "Completado" = "C", 
  "Incompleto" = "I", 
  "Pendiente" = "P" 
}

enum PuestoCarrera {
  "Primero" = 1,
  "Segundo", // 2 quedan implicitos sus valores, porque son autoincrementales
  "Tercero" // 3
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;// 2

// Interfaces

interface Tarea {
  nombre: string,
  estado: Estados,
  urgencia: number
}

// podemos crear varibales que sigan la interface Tarea

let tarea1: Tarea = {
  nombre: "Tarea1",
  estado: Estados.Pendiente,
  urgencia: 10
}

console.log(`Tarea: ${tarea1.nombre}`);

// Asignación multiple de variables

let miTarea = {
  titulo: "Mi tarea",
  estado: Estados.Completado,
  urgencia: 1
}

// Declación 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;

// ** Factor Spread (Propagación)
// Declaración con factor de propagación
let {titulo, estado, urgencia} = miTarea;

// En listas
let listaCompraLunes: string[] = ["Leche", "Patatas"]
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevos"]
let listaCompraMiercoles: string[] = ["Carne", "Pescado"]
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles]

// En objetos
let estadoApp = {
  usuario: "admin",
  session: 3,
  jwt: "Bearer232131231"
}

// Cambiar un valor por propagación
let nuevoEstado = {
  ...estadoApp,
  session: 4
}


// Type de TypeScript -> Gerar nuestros tipos
type Producto = {
  precio: number,
  nombre: string,
  anio: number
}

let coche: Producto = {
  nombre: 'Audi',
  precio: 45000,
  anio: 2010
}

// **Condicionales:

// Operadores ternarios
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo` );

// If - else
if(error){
  console.log("Hay un error");
  
}else {
  console.log("No hay un error");
}

// If - else if - else
if(coche.anio < 2010){
  console.log(`Coche: ${coche.nombre} es viejo`);
  
}else if(coche.anio === 2010){
  console.log(`Coche: ${coche.nombre} es del 2010`);
  
}else {
  `Coche: ${coche.nombre} es nuevo`
}

// Switch
switch (tarea1.estado) {
  case Estados.Completado:
    console.log('La tarea está completada');
    break;
  case Estados.Incompleto:
    console.log('La tarea está Incompleta');
    break;
  case Estados.Pendiente:
    console.log('La tarea está pendiente de completarse');
    break;
  default:
    break;
}

// ** Bucles

let listaTareasNueva: Tarea[] = [
  {
    nombre: "Tarea1",
    estado: Estados.Completado,
    urgencia: 2
  },
  {
    nombre: "Tarea2",
    estado: Estados.Pendiente,
    urgencia: 0
  },
  {
    nombre: "Tarea3",
    estado: Estados.Completado,
    urgencia: 15
  }
]

// Iterar en las tareas

listaTareasNueva.forEach(
  (tarea: Tarea, index: number) => {
    console.log(`${index} - ${tarea.nombre}`);
    // Resultado: 
    // 0 - Tarea1
    // 1 - Tarea2
    // 2 - Tarea3
  }
);

// For Clásico
for (let index = 0; index < listaTareasNueva.length; index++) {
  const tarea = listaTareasNueva[index];
  console.log(`${index} - ${tarea.nombre}`);
   // Resultado: 
    // 0 - Tarea1
    // 1 - Tarea2
    // 2 - Tarea3
}

// Bucles While
while (tarea1.estado !== Estados.Completado) {
  if(tarea1.urgencia === 20){
    tarea1.estado = Estados.Completado;
    break;  
  }else{
    tarea1.urgencia ++;
  }
}

do {
  tarea1.urgencia ++;
  tarea1.estado = Estados.Completado;  
} while (tarea1.estado !== Estados.Completado);

// ** Funciones

/**
 * Función que muestra un saludo por consola a una persona
 */
function saludar() {
  let nombre = "Ariel"
  console.log(`Hola, ${nombre}`); 
}

// Invocación de la función
saludar()

/**
 * 
 * @param nombre Nombre de la persona
 */
function saludarPersona(nombre: string){
  console.log(`Hola, ${nombre}`); 
}
const persona = "Arielito"
saludarPersona(persona);

/**
 * 
 * @param nombre Nombre d ela persona, por defecto será Pepe
 */
function despedirPersona(nombre: string = "Pepe"){
  console.log(`Adiós, ${nombre}`);
  
}

despedirPersona() // Adiós Pepe
despedirPersona("Alba") // Adiós Alba

/**
 * 
 * @param nombre (Opcional) Nombre de la persona a despedir
 */
function despedidaOpcional(nombre?:string){ // el ? es lo mismo que poner el | u or
  if(nombre){
    console.log(`Adiós, ${nombre}`);
  }else {
  console.log(`Adiós`);
  }
}

despedidaOpcional(); // Adiós
despedidaOpcional("Juanjo") // Adiós Juanjo

function variosParams(nombre: string, apellidos?: string, edad: number = 18){
  if(apellidos){
    console.log(`${nombre} ${apellidos} tiene ${edad} años`);
  }else {
    console.log(`${nombre} tiene ${edad} años`);
  }
}

variosParams("Martin") // Martin tiene 18 años
variosParams("Martin", "San José") // Martin San José tienen 18 años
variosParams("Martin", undefined, 30) // Martin tiene 30 años
variosParams("Martin", "San José", 30) // Martin San José tiene 30 años

function ejemploVariosTipos(a: string | number){
  if(typeof(a) === 'string'){
    console.log("A es un string");
  }else if(typeof(a) === 'number'){
    console.log("A es un number");
  }
  else {
    console.log("A no es un string ni un number"); 
    throw Error("A no es un string ni un number")
  }
}

ejemploVariosTipos("Hola");
ejemploVariosTipos(3);

/**
 * 
 * @param nombre Nombre de la persona
 * @param apellidos Apellido de la persona
 * @returns Nombre completo de la persona
 */
function ejemploReturn(nombre:string, apellidos: string): string{
  return `${nombre} ${apellidos}`
}

const nombreCompleto = ejemploReturn("Martin", "San José")
console.log(nombreCompleto);

/**
 * 
 * @param nombres es uyna lista de nombres de string, tantos como queramos
 */
function ejemploMultiParams(...nombres: string[]){
  nombres.forEach((nombre) => {
    console.log(nombre);
    
  })
}

ejemploMultiParams("jazmin", "zaid", "natalia")

const lista = ["Alberto", "Sandra"]
ejemploMultiParams(...lista) // aderimos la lista a la funcion ejemploMultiParams

function ejemploParamLista(nombres: string[]){
  nombres.forEach((nombre) => {
    console.log(nombre);
    
  })
}

ejemploParamLista(lista);

//** Arrow functions */

type Empleado = {
  nombre: string,
  apellidos: string,
  edad: number
}

let empleadoMartin: Empleado = {
  nombre: "Martin",
  apellidos: "San José",
  edad: 30
}

const mostrarEmpleado = (empleado: Empleado) => `${empleado.nombre} tiene ${empleado.edad} años`;

// Llamamos a la función
mostrarEmpleado(empleadoMartin);

const datosEmpleado = (empleado: Empleado):string => {
  if(empleado.edad > 70){
    return `Empleado ${empleado.nombre} está en edad de jubilación`
  }else {
    return `Empleado ${empleado.nombre} está en edad laboral`
  }
}

datosEmpleado(empleadoMartin);// Empleado Martin está en edad laboral

const obtenerSalario = (empleado: Empleado, cobrar: () => void) => {
  if(empleado.edad > 70){
    return
  }else {
    cobrar() // callback a ejecutar
  }
}
const cobrarEmpleado = (empleado: Empleado) => {
  console.log(`${empleado.nombre} cobra su salario`);
}

obtenerSalario(empleadoMartin, () => 'Cobrar Martín')

//** */ Async Functions

async function ejemploAsync(): Promise<string>{
  await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
  console.log("Completado");
  return "Completado"
}

ejemploAsync()
  .then((respuesta) => {
    console.log("Respuesta", respuesta);
  }).catch((error) => {
    console.log("Error", error);
  }).finally(() => "Todo ha terminado")

// Generators functions

function* ejemploGenerator(){
  // yield --> para emitir valores
  let index = 0;

  while(index < 5){
    // Emitimos un valor incrementado
    yield index++;
  }
}

// Guardamos la función generadora en una variable
let generadora = ejemploGenerator();
// Accedemos a los valores emitidos
console.log(generadora.next().value); // 0
console.log(generadora.next().value); // 1
console.log(generadora.next().value); // 2
console.log(generadora.next().value); // 3

// Worker
function* watcher(valor: number){
  yield valor; // emitimos el valor inicial
  yield* worker(valor); // Llamamos a la emisiones del worker para que emita otros valores
  yield valor + 4; // emitimos el valor final + 10
}

function* worker(valor: number){
  yield valor + 1;
  yield valor + 2;
  yield valor + 3;
}

let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); // 0 lo ha hecho el watcher
console.log(generatorSaga.next().value); // 1 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 4 (lo ha hecho el worker)






