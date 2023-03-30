

//Declaraciones
const servidorHTTP = require('express');
const app = servidorHTTP();
const port = process.env.PORT || 3000;
//Configuraciones - Respuestas para el cliente (Chrome, fireFox, Insomnia, Edge)
/*app.post== Creamos un recurso del servidor
app.delete== Eliminamos un recurso del servidor
app.put == Actualizamos un recurso del servidor*/
//app.get == Solicitamos un recurso (registro, imagen, articulo, etc) del servidor (req=request=solicitud,res=response=respuesta)
app.get("/",(req,res)=>{
    res.send('Pagina principal. Servidor en Node.js con express');
})//htdocs = public_html
app.get('*',(req,res)=>{
    res.send('404 ¦ Pagina no encontrada');
})
//Procesos - Respuestas para el desarrollador
app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto: ',port);
})


//declaraciones

/*
---------------------
const servidorHTTP = require('express');
const app = servidorHTTP();
const port =  process.env.Port || 3000;
-------------------
*/
//configuraciones



/*
app.get== seleccionamos un recurso del servidor
app.post= creamos un recurso del servidor
app.delete= Eliminamos un recurso del servidor 
app.put= Aplicaos un recurso del servidor
*/



/*
-----------------
app.get ("/", {req, res}=>(
res.send('Pagina principal. Servidor en Nodo.js con expres'
))
--------------------
*/
//procesos

