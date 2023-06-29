import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
//importación de rutas
import routes from "./routes";

//conexion a la base de datos
mongoose.Promise=global.Promise;
const dbUrl='mongodb://127.0.0.1:27017/proyectoweb';
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(mongoose=>console.log('Conectado al servidor de BD en el puerto 27017'))
.catch(err=>console.log(err));

//Inicia nuestro servidor de aplicaciones ApiRest
const app=express();

//Definir el puerto para la conexión del servidor
app.set('port', process.env.PORT || 4000);

// Midlleware
app.use(cors());

//Servidor en ejecución
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

//rutas
app.use('/api',routes);

app.listen(app.get('port'),()=>{
    console.log('Servidor ejecutandose en el puerto: '+app.get('port'));
});
