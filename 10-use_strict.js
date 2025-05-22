/**
    * --------------------------------------------------------------------
    * 1.- ¿Que hace 'strict mode' en el código?
    * 2.- ¿Cuales son los beneficios de usar 'use strict'?
    * --------------------------------------------------------------------
*/
/** 
    * --------------------------------------------------------------------
    * 1.- Define que el código JavaScript debe ejecutarse en "modo estricto".
    * 2.- Ayuda a escribir código más limpio, por ejemplo, evitando el uso de variables no declaradas. 
    *     El modo estricto convierte la sintaxis incorrecta previamente aceptada en errores reales.
    * --------------------------------------------------------------------
*/
/*

¡Atención! La directiva "use strict" solo se reconoce al principio de un script o una función.

El modo estricto tiene varios cambios en la semántica normal de JavaScript:

    * Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.
    * Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.
    * Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript.
*/
// El modo estricto se aplica a un script completo o a funciones individuales. No se aplica a bloques entre corchetes {}; intentar aplicarlo en tales contextos no hace nada. Código eval, código Function, atributos de controladores de eventos, cadenas pasadas a setTimeout, y similares son scripts enteros, de modo que invocar modo estricto en tales contextos funciona como se espera
// Sintaxis del modo estricto para todo el script
"use strict";
var v = "¡Hola! ¡Estoy en modo estricto para script!";

// ...
function strict() {
  // Sintaxis del modo estricto a nivel de función
  "use strict";
  function nested() {
    return "¡Y yo también!";
  }
  return "¡Hola!  ¡Soy una función en modo estricto!  " + nested();
}
function notStrict() {
  return "Yo no soy estricto.";
}

// No permitido en modo stricto


// No se permite utilizar una variable sin declararla:
x = 3.14;                // This will cause an error

w = {p1:10, p2:20};      // This will cause an error


// No está permitido eliminar una variable (u objeto) o una función.
let y = 3.14;
delete y;      // This will cause an error

function z(p1, p2) {};
delete z;   // This will cause an error 

// No se permite duplicar el nombre de un parámetro: 
function x(p1, p1) {};   // This will cause an error

// No se permiten literales numéricos octales ni caracteres de escape octales

let oct = 010;             // This will cause an error
let oct2 = "\010";            // This will cause an error

// No se permite escribir en una propiedad de solo lectura
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error

// No se permite escribir en una propiedad de solo obtención
const obj = {get x() {return 0} };
obj.x = 3.14;            // This will cause an error

// No se permite eliminar una propiedad que no se pueda eliminar
delete Object.prototype; // This will cause an error

// La palabra eval, argumnets, implements, interface, let, package, private, protected, public, static, yield no se pueden utilizar como variables
let eval = 3.14;         // This will cause an error
let arguments = 3.14;    // This will cause an error

// La declaración with no está permitida
with (Math){x = cos(2)}; // This will cause an error

// Por razones de seguridad, no se permite que eval() cree variables en el ámbito desde el que fue llamado
eval ("x = 2");
alert (x);      // This will cause an error

eval ("var x = 2");
alert (x);    // This will cause an error

eval ("let x = 2");
alert (x);        // This will cause an error

// Si no se especifica el objeto, las funciones en modo estricto devolverán undefined y las funciones en modo normal devolverán el objeto global (window):
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();
