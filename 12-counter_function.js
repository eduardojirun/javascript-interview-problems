/**
    * --------------------------------------------------------------------
    * 1.- Crea una función que registre cuantas veces fue llamada y que guarde ese valor internamentre, como en el ejemplo:
    * 
    * function counter() {}
    * console.log(counter()); // 1
    * console.log(counter()); // 2
    * console.log(counter()); // 3
    * 
    * 2.- Todo debe ser dentro de una función únicamente
    * --------------------------------------------------------------------
*/

const counter = function () {
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
  
// Instancia 1
const c = counter();

// Instancia 2
const c2 = counter();
  
console.log(c.value()); // 0.

c.increment();
c.increment();
c.increment();
console.log(c.value()); // 3
c.decrement();
console.log(c.value()); // 2

// Instancia 2, no tiene guardado el valor 'privateCounter'
console.log(c2.value()); // 0