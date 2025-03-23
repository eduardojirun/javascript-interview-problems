// ¿Que es un clousure?
// Un closure es la combinación de una función agrupada (dentro de otra), que guarda referencias del estado adyacente (ámbito léxico). En otras palabras, un closure te da acceso al alcance de una función externa desde una función interna

// Cada closure tiene tres alcances:
// 1.- Alcance local (Ámbito propio)
// 2.- Alcance envolvente (puede ser alcance de bloque, función o módulo)
// 3.- Alcance global

function makeSizer(size) {
    return function () {
      document.body.style.fontSize = `${size}px`;
    };
}
  
const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

/* 
<button id="size-12">12</button>
<button id="size-14">14</button>
<button id="size-16">16</button>
 */

// =============EJEMPLO 2==================================
// como metodo privado
const makeCounter = function () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  };
  
  const counter1 = makeCounter();
  const counter2 = makeCounter();
  
  console.log(counter1.value()); // 0.
  
  counter1.increment();
  counter1.increment();
  console.log(counter1.value()); // 2.
  
  counter1.decrement();
  console.log(counter1.value()); // 1.
  console.log(counter2.value()); // 0.

  // ================EJEMPLO 3=====================
  //  los dos contadores mantienen su independencia el uno del otro. Cada closure hace referencia a una versión diferente de la variable privateCounter a través de su propio closure. Cada vez que se llama a uno de los contadores, su entorno léxico cambia cambiando el valor de esta variable. Los cambios en el valor de la variable en un closure no afectan el valor en el otro closure.

// clousure sobre modulos
// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};
// Aquí, el módulo exporta un par de funciones getter-setter (para asignar y obtener), que se cierran sobre la variable de alcance del módulo x. Incluso cuando x no es directamente accesible desde otros módulos, se puede leer y escribir con las funciones.

import { getX, setX } from "./myModule.js";
console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
// Los closure también pueden cerrar sobre valores importados, que se consideran como enlazadas en vivo, porque cuando el valor original cambia, el importado cambia en consecuencia.


// ===============EJEMPLO 4==================
// myModule.js
export let x = 1;
export const setX = (val) => {
  x = val;
};

// closureCreator.js
import { x } from "./myModule.js";
export const getX = () => x; // Cerrar sobre un enlace en vivo importado

// otro file
import { getX } from "./closureCreator.js";
import { setX } from "./myModule.js";

console.log(getX()); // 1
setX(2);
console.log(getX()); // 2