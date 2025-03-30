// ¿Que es hoisting?

// JavaScript divide la declaración y asignación de funciones y variables; "hoists" o "alza" las declaraciones en la parte superior de su scope (ámbito) antes de la ejecución y nos permite usar las variables antes de su declaración en el ejemplo anterior.

console.log(foo); // undefined
var foo = 'foo'; // con var se inicializa con undefined

// Declaracion
var foo;
// Asignacion
foo = 'foo';

// Declaracion y  Asignacion
var foo = 'foo';

// Hoisting de variables con let y const
// Las variables declaradas con let y const también reciben hoisting, pero no son inicializadas con un valor por defecto. Acceder a una variable declarada con let o const antes de que sea declarada resulta en un ReferenceError:

console.log(foo); // Uncaught ReferenceError: Cannot access 'foo' before initialization
let foo = 'bar';  // lo mismo para variables declaradas con const

// ==============================
// Hoisting en funciones

foo(); // "foo"

function foo() {
	console.log('foo');
}

foo(); // Uncaught TypeError: foo is not a function
var foo = function () { }

bar(); // Uncaught ReferenceError: Cannot access 'bar' before initialization
let bar = function () { }

baz(); // Uncaught ReferenceError: Cannot access 'baz' before initialization
const baz = function () { }