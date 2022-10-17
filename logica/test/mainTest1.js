
// ........................................................
// mainTest1.js
// ........................................................
const Logica = require("../Logica.js")
var assert = require("assert")
// ........................................................
// main ()
// ........................................................

// es donde empieza la prueba del test 

describe("Test 1: insertar una medicion", function () {
	// ....................................................
	// ....................................................
	var laLogica = null
	// ....................................................
	// ....................................................
	it("conectar a la base de datos", function (hecho) {  // la prueba concreta, el cual tiene su titulo y un callback con una funcion con cualquier nombre. 
		laLogica = new Logica(  // crear un objeto --> 
			"../bd/datos.db",
			function (err) {
				if (err) {
					throw new Error("No he podido conectar con datos.db")
				}
				hecho()
			})
	}) // it
	// ....................................................
	// ....................................................
	
	
	// it
	// ....................................................
	// ....................................................

	it("puedo insertar una medicion",
		async function () {
			try {

			await laLogica.insertarMedicion(
				{
				    medida: "12",
					fecha: "viernes"
				})
			var res = await laLogica.mostrarMediciones()
		
			console.log(res.length);
		   assert.equal(res[length-1].medida, "12", "¿La medida no es 12?")
			await laLogica.borrarMedicion(res[length-1]);

		} catch (error) {
			err=error;
		}
				
	
	// it
	// ....................................................
	// ....................................................

	
	// ....................................................
	// ....................................................
	it("cerrar conexión a la base de datos",
		async function () {
			try {
				await laLogica.cerrar()
			} 
			catch (err) {
				// assert.equal( 0, 1, "cerrar conexión a BD fallada: " + err)
				throw new Error("cerrar conexión a BD fallada: " + err)
			}
		}) // it
	
	
    })

	
})
