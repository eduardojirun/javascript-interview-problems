 /**
     * --------------------------------------------------------------------
     * ¿Que imprime en la consola?
     * --------------------------------------------------------------------
     */
var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("En logColor - this.color: " + this.color);
        console.log("En logColor - self.color: " + self.color);
        (function() {
            console.log("En IIFE - this.color: " + this.color);
            console.log("En IIFE - self.color: " + self.color);
        })();
    }
}
myCar.logColor();
 /**
     * --------------------------------------------------------------------
     * Try
     * --------------------------------------------------------------------
     * 1.- En logColor - this.color: Blue // this hace referecnia a variable color
     * 2.- En logColor - self.color: Blue // self es igual a this y no cambia para nada el resultado de la anterior
     * 3.- En IIFE - this.color: undefined // color no esta definida dentro logColor(ambito de funcion)
     * 4.- En IIFE - this.color: Blue // self hace referencia a this de myCar, que esta afuera del ambito de logColor
     *
*/