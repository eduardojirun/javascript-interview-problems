/**
    * --------------------------------------------------------------------
    * ¿Que imprime la función? y porqué?
    * --------------------------------------------------------------------
*/

var num = 50;
function logNumber() {
    console.log(num);
    var num = 100;
}

logNumber(); // undefined


// -------------------------- ¿Porqué pasa esto? ------------------------------------------
// El Hoisting de la funcion hace lo siguiente
function logNumber() {
    var num; // El hoisting la coloca hasta arriba del scope de funcion pero como no-definida
    console.log(num); // Al no estar definida la marca como undefined
    num = 100;
}


// -------------------------- Ajuste ------------------------------------------
// Lo correcto sería usar 'let' o 'const', ya no es recomendable usar 'var'
// al usar 'let' o 'const' marcaría error al volver a definir la variable
let num = 50;
function logNumber() {
    num = 100;
    console.log(num); // 100
}
logNumber(); // 100