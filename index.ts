import Server from './classes/server';
import userRoutes from './routes/usuario';
import mongoose from 'mongoose'; 
import fileUpload from "express-fileupload";
import express from 'express';
import postRoutes from './routes/post';



const server = new Server();

//Express
server.app.use(express.urlencoded({extended: true}));
server.app.use(express.json());

//Fileupload
server.app.use( fileUpload({
    useTempFiles: true, 
    tempFileDir: './temp/'
}) );

//Rutas
server.app.use('/user', userRoutes ); 
server.app.use('/posts', postRoutes ); 


mongoose.connect( 'mongodb://localhost:27017/fotosgram', ( err ) => {
    
            if ( err ) throw err;

            console.log('Base de datos online' );
});


server.start(() => {
    console.log(`Corriendo en puerto: ${server.port}`);
}); 

// useNewUrlParser
// useCreateIndex