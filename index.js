var mongoose= require("mongoose");
var app = require("./app"); //Carreguem l'arxiu de configuracio
var port = process.env.PORT || 3977; //Definim el port del servidor web

mongoose.connect("mongodb://localhost:27017/curs_nodejs",(err, res) =>{
if(err){
throw err;
}else{
console.log("La base de dades está funcionant tcorrectamente");
    app.listen(port,function(){ //Instrucció per activar el servidor ajustant el port de escolta
        console.log("Servidor en funcionament");
    });
}
});
