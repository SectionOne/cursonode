'use strict'

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//Carregar  rutes
var user_routes = require("./routes/usuari");

app.use(bodyParser.urlencoded({extended:false})); //Configurar  bodyparser
app.use(bodyParser.json());

//configurar capçaleres

//Rutes base
app.use("/api", user_routes); //Definim una ruta base sobre la que treballar

/*app.get("/usuaris", function(req, res){
    res.status(200).send({message: "Llistat d'usuaris"});
});*/

module.exports = app;