// 2.- ¿Que es IIFE ?


// IIFE (Immediately Invoked Function Expression)
// Expresión de función que se ejecuta inmediatamente después de ser creada
(function(){})();

(function() {
    console.log('Esto es una IIFE, se ejecuta inmediatamente después de ser creada.')
})();

// Pasando parámetros
(function doubleNumber(num) {
    result = num * 2
    console.log(result);    
    return result
})(10); // 20

// Private scope
(function() {
    function getTotal(a, b) {
        return a + b
    }
    var x = 0;
    if(x) {
        console.log(x);        
    } else {
        console.log(x);        
    }
})();

// Variable no es accesible fuera de el scope
(function () {
    var aName = "Barry";
})();
aName; // throws "Uncaught ReferenceError: aName is not defined"


// Asignación a una variable
var result = (function () {
    var name = "Barry";
    return name;
})();
result; // Inmediatamente crea la salida: "Barry"