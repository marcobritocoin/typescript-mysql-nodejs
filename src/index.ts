import router from "./router/router";
import Server from "./server/server";
import MySQL from './mysql/mysql';

const server = Server.init(3000);
server.app.use(router);

//--> Manera de instanciar el objeto de conexion a BD
//const mysql = new MySQL();
//MySQL.instance;

server.start(()=>{
    console.log('Servidor corriendo en el puerto 3000');
});