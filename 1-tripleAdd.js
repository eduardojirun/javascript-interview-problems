// 1.- Desarrolla la función que devuelve la suma de los 3 parámetros
// tripleAdd(10)(20)(30); 

// Intento
function tripleAdd(param1) {
    function doubleAdd(param2) {
        function add(param3) {
            return  param1 + param2 + param3;
        }
        return add;
    }
    return doubleAdd;
}

// Óptima
function tripleAdd(param1) {
    return function doubleAdd(param2) {
        return function add(param3) {
            return  param1 + param2 + param3;
        }
    }
}
console.log( tripleAdd(10)(20)(30) ); // 60

// Sobresaliente
function quadrupleAdd(param1) {
    return function doubleAdd(param2) {
        return function add(param3, param4) {
            return  param1 + param2 + param3 + param4;
        }
    }
}
console.log( quadrupleAdd(10)(20)(30, 40) ); // 100
