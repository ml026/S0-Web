
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
const logica = require( './logica.js' )

// --------------------------------------------------------------------------------
// main()
// --------------------------------------------------------------------------------
async function main() {

	var laLogica = await logica( "../bd/datos.db" )

	// OK: llamada "directa"
	var r = await laLogica.prueba( "datos entrada" )
	console.log( r )

	// OK: llamada "por nombre de texto"
	r =  await	laLogica.llamar( "prueba", "datos entrada" ) 
	console.log( r )

} // main()

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
main()

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
