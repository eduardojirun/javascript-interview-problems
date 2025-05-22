/**
    * --------------------------------------------------------------------
    * 1.- ¿Que es una función curry y convierte esta función en una función curry?
    * --------------------------------------------------------------------
*/
function getProduct(num1, num2) {
    return num1 * num2;
}
getProduct(10, 20);
console.log( getProduct(10, 20) );
/**
    * --------------------------------------------------------------------
    * 1.- Currying es una técnica de programación funcional que transforma una función que toma múltiples argumentos en una serie de funciones que toman un solo argumento cada una. En otras palabras, en lugar de pasar todos los argumentos a la función a la vez, se pueden pasar gradualmente, creando una función que espera por cada argumento hasta que todos estén disponibles. 
    * --------------------------------------------------------------------
*/
function getProductCurry(num1) {
  return function(num2) {
    return num1 * num2;
  };
}
console.log( getProductCurry(10)(20) );

// o también se puede hacer así
let mult = getProductCurry(2); // mult es una nueva función que multiplica 2 a cualquier número
console.log(mult(3)); // Output: 5

/* 
    // con funciones flecha
    function sum(a) {
        return (b) => {
            return (c) => {
                return a + b + c
            }
        }
    }
    console.log(sum(1)(2)(3)) // 6 
    
    // de otra manera
    const sum1 = sum(1);
    const sum2 = sum1(2);
    const result = sum2(3);
    console.log(result); // 6
*/
