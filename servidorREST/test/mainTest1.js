// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
const request = require('request')
const assert = require('assert')

const IP_PUERTO = "http://localhost:8080"


// --------------------------------------------------------------------------------
describe("Test 1: pon aquí tu comentario (recuerda arrancar el servidor)", function () {
  // ...........................................................................
  // ......................................................................... 
	 it( "probar POST /insertarMedicion", function( hecho ) {
   // .post
 	request.post(
			{ url : IP_PUERTO+"/insertarMedicion",
		      headers : { 'User-Agent' : 'maria', 'Content-Type' : 'application/json' },
			  body : JSON.stringify( { medida: 15, fecha: "Viernes" } )
	 		},
			function( err, respuesta, carga ) {

				assert.equal( err, null, "¿ha habido un error?: " + err )
				assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)?" )
				//Deveuelve el callback
	 			hecho()
			} 
	 	) 
	 }) // it

	// ........................................................................... 
	// ........................................................................... 
	it("probar GET /mediciones", function (hecho) {

		request.get(
			{
				url: IP_PUERTO + "/mediciones",
				headers: { 'User-Agent': 'Maria'},

			},
			function (err, respuesta, carga) {

				var resultados = JSON.parse(carga)
				console.log(resultados);

				assert.equal(err, null, "¿ha habido un error?: " + err)
				assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)")

				hecho()
			} // callback
		) // .post
	}) // it

}) // describe

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

