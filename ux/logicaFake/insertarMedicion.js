// ---------------------------------------------------
// fake
// ---------------------------------------------------
function insertarMedicion( datos, cb ) {

	llamarInsertarMedicion( "http://localhost:8080/insertarMedicion", datos, cb )

} // ()

function llamarInsertarMedicion( nombreFuncion, parametrosLlamada, cb ) {

	// preparar la llamada remota
	var xmlhttp = new XMLHttpRequest()
	xmlhttp.onreadystatechange = function() {
		// callback para cuando llegue la respuesta de la siguiente peticion
		
		if( this.readyState == 4 && this.status == 200 ){

			//  texto que recibo.
			console.log( "recibo: " + this.responseText )

			var resultado = this.responseText

		
			try {

				resultado = JSON.parse( resultado )

				console.log( "    no he podido hacer parse de " + resultado )
				
			} catch( error )  {
			}

			// en todo caso, aqui el primer parámetro (error = null, porque
			// estoy dentro de status == 200)
			// Los errores en el uso de la función de la lógica
			// que los maneje a su antojo la función
			cb( null, resultado ) 

		} 

		else if( this.readyState == 4 && this.status != 200 ){
			// el status no es 200
			cb( this.status, null )
		}

	} 


	xmlhttp.open("POST", nombreFuncion, true)
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send( JSON.stringify(parametrosLlamada) )

} // ()

