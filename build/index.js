"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cursos_mock_1 = require("./mock/cursos.mock");
const Curso_1 = require("./models/Curso");
const Estudiante_1 = require("./models/Estudiante");
const ITarea_1 = require("./models/interfaces/ITarea");
const Programar_1 = require("./models/interfaces/Programar");
const Persona_1 = require("./models/Persona");
console.log('Hola Ariel');
console.log('Adiós afg');
// Declaración de variables:
let nombre = "Ariel";
// console.log("Hola, " + nombre);
// console.log("Que tal,", nombre, "?");
// console.log(`Como estas, ${nombre}`);
let email = "afg@gmail.com"; // Variable local
console.log(`Email de ${nombre} es ${email}`);
const PI = 3.1416;
var apellidos = "San José"; // any no es buena practica porque cambia a cualquier tipo, es mejor tiparlos según el caracter
apellidos = 3;
var error;
error = false;
console.log(`Hay error: ${error}`);
// Instanciacion múltiple de variables
let a, b, c; // instancia 3 variables sin valor oficial 
a = "TypeScript";
b = true;
c = 5.9;
// BuiltIn Types: number, string, boolean, void, null, undefined
// Tipo más complejos
// Lsita de cadenas de texto
let listaTareas = ["Tarea 1", "Tarea 2"];
// Combinaci´n de tipos en listas
let valores = [false, "Hola", true, 56];
// Enumerados
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero"; // 3
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTarea = Estados.Completado;
let puestoMaraton = PuestoCarrera.Segundo; // 2
// podemos crear varibales que sigan la interface Tarea
let tarea1 = {
    nombre: "Tarea1",
    estado: Estados.Pendiente,
    urgencia: 10
};
console.log(`Tarea: ${tarea1.nombre}`);
// Asignación multiple de variables
let miTarea = {
    titulo: "Mi tarea",
    estado: Estados.Completado,
    urgencia: 1
};
// Declación 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;
// ** Factor Spread (Propagación)
// Declaración con factor de propagación
let { titulo, estado, urgencia } = miTarea;
// En listas
let listaCompraLunes = ["Leche", "Patatas"];
let listaCompraMartes = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles = ["Carne", "Pescado"];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles];
// En objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer232131231"
};
// Cambiar un valor por propagación
let nuevoEstado = Object.assign(Object.assign({}, estadoApp), { session: 4 });
let coche = {
    nombre: 'Audi',
    precio: 45000,
    anio: 2010
};
// **Condicionales:
// Operadores ternarios
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);
// If - else
if (error) {
    console.log("Hay un error");
}
else {
    console.log("No hay un error");
}
// If - else if - else
if (coche.anio < 2010) {
    console.log(`Coche: ${coche.nombre} es viejo`);
}
else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`);
}
else {
    `Coche: ${coche.nombre} es nuevo`;
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
let listaTareasNueva = [
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
];
// Iterar en las tareas
listaTareasNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
    // Resultado: 
    // 0 - Tarea1
    // 1 - Tarea2
    // 2 - Tarea3
});
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
    if (tarea1.urgencia === 20) {
        tarea1.estado = Estados.Completado;
        break;
    }
    else {
        tarea1.urgencia++;
    }
}
do {
    tarea1.urgencia++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);
// ** Funciones
/**
 * Función que muestra un saludo por consola a una persona
 */
function saludar() {
    let nombre = "Ariel";
    console.log(`Hola, ${nombre}`);
}
// Invocación de la función
saludar();
/**
 *
 * @param nombre Nombre de la persona
 */
function saludarPersona(nombre) {
    console.log(`Hola, ${nombre}`);
}
const persona = "Arielito";
saludarPersona(persona);
/**
 *
 * @param nombre Nombre d ela persona, por defecto será Pepe
 */
function despedirPersona(nombre = "Pepe") {
    console.log(`Adiós, ${nombre}`);
}
despedirPersona(); // Adiós Pepe
despedirPersona("Alba"); // Adiós Alba
/**
 *
 * @param nombre (Opcional) Nombre de la persona a despedir
 */
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`Adiós, ${nombre}`);
    }
    else {
        console.log(`Adiós`);
    }
}
despedidaOpcional(); // Adiós
despedidaOpcional("Juanjo"); // Adiós Juanjo
function variosParams(nombre, apellidos, edad = 18) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    }
    else {
        console.log(`${nombre} tiene ${edad} años`);
    }
}
variosParams("Martin"); // Martin tiene 18 años
variosParams("Martin", "San José"); // Martin San José tienen 18 años
variosParams("Martin", undefined, 30); // Martin tiene 30 años
variosParams("Martin", "San José", 30); // Martin San José tiene 30 años
function ejemploVariosTipos(a) {
    if (typeof (a) === 'string') {
        console.log("A es un string");
    }
    else if (typeof (a) === 'number') {
        console.log("A es un number");
    }
    else {
        console.log("A no es un string ni un number");
        throw Error("A no es un string ni un number");
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
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
const nombreCompleto = ejemploReturn("Martin", "San José");
console.log(nombreCompleto);
/**
 *
 * @param nombres es uyna lista de nombres de string, tantos como queramos
 */
function ejemploMultiParams(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploMultiParams("jazmin", "zaid", "natalia");
const lista = ["Alberto", "Sandra"];
ejemploMultiParams(...lista); // aderimos la lista a la funcion ejemploMultiParams
function ejemploParamLista(nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploParamLista(lista);
let empleadoMartin = {
    nombre: "Martin",
    apellidos: "San José",
    edad: 30
};
const mostrarEmpleado = (empleado) => `${empleado.nombre} tiene ${empleado.edad} años`;
// Llamamos a la función
mostrarEmpleado(empleadoMartin);
const datosEmpleado = (empleado) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} está en edad de jubilación`;
    }
    else {
        return `Empleado ${empleado.nombre} está en edad laboral`;
    }
};
datosEmpleado(empleadoMartin); // Empleado Martin está en edad laboral
const obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return;
    }
    else {
        cobrar(); // callback a ejecutar
    }
};
const cobrarEmpleado = (empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
};
obtenerSalario(empleadoMartin, () => 'Cobrar Martín');
//** */ Async Functions
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
        console.log("Completado");
        return "Completado";
    });
}
ejemploAsync()
    .then((respuesta) => {
    console.log("Respuesta", respuesta);
}).catch((error) => {
    console.log("Error", error);
}).finally(() => "Todo ha terminado");
// Generators functions
function* ejemploGenerator() {
    // yield --> para emitir valores
    let index = 0;
    while (index < 5) {
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
function* watcher(valor) {
    yield valor; // emitimos el valor inicial
    yield* worker(valor); // Llamamos a la emisiones del worker para que emita otros valores
    yield valor + 4; // emitimos el valor final + 10
}
function* worker(valor) {
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
//** */ Sobrecarga de funciones
function mostrarError(error) {
    console.log("Ha habido un error", error);
}
//**? */ Persistencia de datos
// 1. LocalStorage -> Almacena los datos en el navegador (no se eliminan automáticamente)
// 2. Session Storage -> La diferencia radica en la sesión del navegador. Los datos se persisten en la sesión del navegador
// 3. Cookies ->Tiene una fecha de caducidad y también tienen un ámbito de URL
// LocalStorage y Session Storage
function guardar() {
    localStorage.set("nombre", "Martín");
}
function leer() {
    let nombre = localStorage.get("nombre");
    let nombreSession = sessionStorage.get("nombre");
}
function borrarItem(item) {
    localStorage.removeItem(item);
    sessionStorage.removeItem(item);
}
function borrarTodas() {
    localStorage.clear();
    sessionStorage.clear();
}
// Cookies
const cookieOptions = {
    name: "usuario",
    value: "Martín",
    maxAge: 10 * 60,
    expires: new Date(2099, 10, 1),
    path: "/", // optional string,
};
// Seteamos la Cookie
// ? setCookie(cookieOptions)
// Leer una Cookie
// ? let cookieLeida = getCookieValue("usuario");
// Eliminar
// ? deleteCookie("usuario");
//Eliminar todas las Cookies
// ? deleteAllCookies();
// Clase Temporizador
class Temporizador {
    empezar() {
        setTimeout(() => {
            // Comprobamos que exista la fucnión terminar como callback
            if (!this.terminar)
                return;
            // Cuando haya pasado el tiempo se ejecutará la función terminar
            this.terminar(Date.now());
        }, 10000);
    }
}
const miTemporizador = new Temporizador();
// Definir la función del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo) => {
    console.log("Evento terminado en:", tiempo);
};
// Lanzamos el temporizador
miTemporizador.empezar(); // Inicia el timeout y cuando termine, se ejecuta la función terminar()
// setInterval(() => console.log("Tic"), 1000); // Imprimir "tic cadasegundo por consola"
// Eliminar la ejecución de la función 
delete miTemporizador.terminar;
//** */ Clases **
//** */ CLASES
// Creamos un curso
// const cursoTS: Curso = new Curso("TypeScript", 15);
// const cursoJS: Curso = new Curso("JavaScript", 20);
// const listadoCursos: Curso[] = [];
// listadoCursos.push(cursoTS, cursoJS); // [Lista de cursos];
// ? Usamos el MOCK
const listaCursos = cursos_mock_1.LISTA_CURSOS;
// Creamos un estudiante
const martin = new Estudiante_1.Estudiante("Ariel", listaCursos, "Fuentes");
console.log(`${martin.nombre} estudia`);
// Iteramos por cada uno de los cursos
martin.cursos.forEach((curso) => {
    console.log(`- ${curso.nombre} (${curso.horas} horas)`);
});
const cursoAngular = new Curso_1.Curso("Angular", 40);
martin.cursos.push(cursoAngular); // Añadimos el curso
// Conocer las horas Estudiadas
martin.horasEstudiadas; // number
//** */ Saber la instancia de un objeto/variable
// - TypeOf
// - InstanceOf
let fechaNacimiento = new Date(1991, 10, 10);
if (fechaNacimiento instanceof Date) {
    console.log("Es una instancia de Date");
}
if (martin instanceof Estudiante_1.Estudiante) {
    console.log("Martin es un Estudiante");
}
//** Herencia y Polimorfismo */
let trabajador1 = new Persona_1.Trabajador("Martín", "Flores", 30, 2000);
let trabajador2 = new Persona_1.Trabajador("Pepe", "Flores", 30, 2000);
let trabajador3 = new Persona_1.Trabajador("Juan", "Flores", 30, 2000);
let jefe = new Persona_1.Jefe("Pablo", "García", 50);
jefe.trabajadores.push(trabajador1, trabajador2, trabajador3);
trabajador1.saludar(); //  especificado en Empleado
jefe.saludar(); //herencia de Persona
jefe.trabajadores.forEach((trabajador) => {
    trabajador.saludar(); // especificado en Trabajador
});
//** USO DE INTERFACES */
let programar = {
    titulo: 'Programar en Typescript',
    descripcion: 'Practicar con katas para aprender a programar con TS',
    completada: false,
    urgencia: ITarea_1.Nivel.Urgente,
    resumen: function () {
        return `${this.titulo} - ${this.completada} - Nivel: ${this.urgencia}`;
    }
};
console.log(programar.resumen());
// Tarea de Programación (implemente ITarea)
let programarTS = new Programar_1.Programar("Typescript", "Tarea de programación en TS", false, ITarea_1.Nivel.Bloqueante);
console.log(programarTS);
//** DECORADORES --> @  */
// - Clases
// - Parámetros
// - Métodos
// - Propiedades
// function Override(label: string){
//   return function (target:any, key:string){
//     Object.defineProperty(target, key, {
//       configurable: false,
//       get: () => label
//     })
//   }
// }
// class PruebaDecorador {
//   @Override('Prueba') // llamar a la función Override
//   nombre:string = "Martin"
// }
// let prueba =  new PruebaDecorador();
// console.log(prueba.nombre); // "Prueba" siempre va a ser devuelto a través del get()
// Otra función para usarla como decorador
// function SoloLectura(target: any, key: string){
//   Object.defineProperty(target, key, {
//     writable: false
//   })
// }
// class PruebaSoloLectura{
//   @SoloLectura
//   nombre: string = '';
// }
// let pruebaLectura = new PruebaSoloLectura();
// pruebaLectura.nombre = "Martin";
//console.log(pruebaLectura.nombre); // ==> Undefined, ya que no se le puede dar un valor (es solo lectura)
// Decorador para parámetros de un método
// function mostrarPosicion(target:any, propertyKey:string, parameterIndex:number){
//   console.log("Posición", parameterIndex);
// }
// class PruebaMetodoDecorador {
//   prueba(a:string, @mostrarPosicion b:boolean){
//     console.log(b);
//   }
// }
// Usamoe el método con el parámetro y su decorador
// new PruebaMetodoDecorador().prueba('Hola', false); 
//** PATRONES CREACIONALES */
// const miPrimerSingleton = Singleton.getInstance();
// const miSegundoSingleton = Singleton.getInstance();
// Comprobar si ambos son iguales
// if(miPrimerSingleton === miSegundoSingleton){
//   console.log("Singleton funciona correctamente, ambas variables tienen la misma instancia");
//   miPrimerSingleton.mostrarPorConsola();
//   miSegundoSingleton.mostrarPorConsola();
// }else {
//   console.log("Error, las variables contienen distintas instancias");
// }
//# sourceMappingURL=index.js.map