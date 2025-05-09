/**
    * --------------------------------------------------------------------
    * ¿Diferencia entre == y ===?
    * --------------------------------------------------------------------
*/

console.log('4' == 4); // true, no compara el tipo de dato, el primero es cadena y el segundo entero
console.log('4' === 4); // false, aqui compara el tipo de dato

// comparando entero con cadena => la cadena es convertida a entero; console.log('3' == 2); // false
// comparando booleano con no-booleano => el no-bolleano es convertido a booleano // console.log(true == 2); // false
// comparando objeto y primitivo => el objeto es convertido a primitivo // console.log({} == true); // false