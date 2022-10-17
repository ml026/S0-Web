// // --------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------

// .....................................................................
// Logica.js
// .....................................................................
const sqlite3 = require("sqlite3")
// .....................................................................
// .....................................................................
module.exports = class Logica {
	// .................................................................
	// nombreBD: Texto
	// -->
	// constructor () -->
	// .................................................................
	constructor(nombreBD, cb) {
		this.laConexion = new sqlite3.Database(
			nombreBD,
			(err) => {
				if (!err) {
					this.laConexion.run("PRAGMA foreign_keys = ON")
				}
				cb(err)
			})
	} // ()
	// .................................................................
	// nombreTabla:Texto
	// -->
	// borrarFilasDe() -->
	// .................................................................
	borrarFilasDe(tabla) {
		return new Promise((resolver, rechazar) => {
			this.laConexion.run(
				"delete from " + tabla + ";",
				(err) => (err ? rechazar(err) : resolver())
			)
		})
	} // ()
	// .................................................................
	// borrarFilasDeTodasLasTablas() -->
	// .................................................................
	async borrarFilasDeTodasLasTablas() {
		await this.borrarFilasDe("Medida")
		
	} // ()

	// .................................................................
	// nombreTabla:Texto
	// -->
	// borrarFilasDe() -->
	// .................................................................
	borrarMedicion(ID) {
		var textoSQL=
			"delete from Medicion where ID=$ID ;"
			var valoresParaSQL = {
				$ID:ID
			}
		return new Promise((resolver, rechazar) => {
			
			this.laConexion.run (textoSQL,valoresParaSQL,function(err){
				
				(err ? rechazar(err) : resolver())
			})
		})
	}
	// .................................................................
	// datos:{ID:String, medida:float: fecha:String}
	// -->
	// insertarMedicion() -->
	// .................................................................
	insertarMedicion(datos) {
		var textoSQL =
			"insert into Medicion values( NULL, $medida, $fecha );"
		var valoresParaSQL = {		
			$medida: datos.medida,
			$fecha: datos.fecha
		}
		console.log(datos);
		
		// <//> <//> <//> <>/
		return new Promise((resolver, rechazar) => {
			this.laConexion.run(textoSQL, valoresParaSQL, function (err) {
				(err ? rechazar(err) : resolver())
			})
		})
	} // ()

	// .................................................................
	
	// .................................................................
	// mostrarMediciones() 
	// .................................................................

	mostrarMediciones() {
		var textoSQL = "select * from Medicion";  //$dni es un parámetro 
		var valoresParaSQL = { } // objeto 
		return new Promise((resolver, rechazar) => {
			this.laConexion.all(textoSQL, valoresParaSQL,
				(err, res) => {
					(err ? rechazar(err) : resolver(res))
				})
		})
	}
	
	// .................................................................
	// cerrar() -->
	// .................................................................

	cerrar() {
		return new Promise((resolver, rechazar) => {
			this.laConexion.close((err) => {
				(err ? rechazar(err) : resolver())
			})
		})
	} // ()
} 
// class
// .....................................................................
// .....................................................................
