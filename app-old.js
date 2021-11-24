const http = require("http");

// request -> solicitud por el cliente
// respond -> es la respuesta a esa peticion
http.createServer((req, res) => {
	// res.writeHead(200, { "Content-Type": "application/json" });
	// res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
	// res.writeHead(200, { "Content-Type": "application/csv" });

	// const persona = {
	// 	id: 1,
	// 	nombre: "Tomas",
	// };
	// Tomas string
	// res.write(JSON.stringify(persona));

	// res.write("id, nombre\n");
	// res.write("1, Tomas\n");
	// res.write("2, Maria\n");
	// res.write("3, Juan\n");
	// res.write("4, Pedro\n");

	// -----------------------------

	res.end();
}).listen(8080);

console.log("Escuchado el puerto", 8080);
