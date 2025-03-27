// que es this y como se usa en javascript.
// Respuesta:
// this hace referencia al contexto en el que se ejecuta un fragmento de código.

// llamando al obj
var obj = {
    foo: function () {return 'foo'},
    bar: function () {
        document.addEventListener('click', function(e) {
            // Aqui this hace referencia al objecto obj
            obj.foo
        })
    }
}

// remplazando por this pero hace referencia a docuemnt y no al obj
var obj = {
    foo: function () {return 'foo'},
    bar: function () {
        document.addEventListener('click', function(e) {
            // Aqui this hace referencia a la funcion que lo encierra (document) y no a la propiedad foo de obj
            this.foo()
        })
    }
}

// enlazando el this con that para hacer referencia al obj
var obj = {
    foo: function () {return 'foo'},
    bar: function () {
        var that = this
        document.addEventListener('click', function(e) {
            // con that conservamos el this al que queremos hacer referencia
            that.foo()
        })
    }
}

// Lo mismo que that pero con funcion de javascript
var obj = {
    foo: function () {return 'foo'},
    bar: function () {
        document.addEventListener('click', function(e) {
            // bind enlaza this el contexto clase
            this.foo()
        }).bind(this)
    }
}

// Funciones flecha sustituyen a bind()
var obj = {
    foo: function () {return 'foo'},
    bar: function () {
        var that = this
        // funciones flecha llevan implicito el bind de this a la clase
        document.addEventListener('click', e => this.foo() )
    }
}