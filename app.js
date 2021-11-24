require("dotenv").config({ path: ".env" });
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const hbs = require("hbs");

// Handdlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("home", {
		nombre: "Tomas Sotto",
		titulo: "Curdo de Node",
	});
});

// app.get("/generic", (req, res) => {
// 	res.sendFile(__dirname + "/public/generic.html");
// });

app.get("/generic", (req, res) => {
	res.render("generic", {
		nombre: "Tomas Sotto",
		titulo: "Curdo de Node",
	});
});

app.get("/elements", (req, res) => {
	res.render("elements", {
		nombre: "Tomas Sotto",
		titulo: "Curdo de Node",
	});
});

app.get("/*", (req, res) => {
	// Enviar archivo -> dirname = construir el path
	res.sendFile(__dirname + "/public/back/404.html");
});

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
