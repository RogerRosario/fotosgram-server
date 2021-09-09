"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("./routes/post"));
const cors_1 = __importDefault(require("cors"));
const server = new server_1.default();
//Express
server.app.use(express_1.default.urlencoded({ extended: true }));
server.app.use(express_1.default.json());
//Fileupload
server.app.use(express_fileupload_1.default({
    useTempFiles: true,
    tempFileDir: './temp/'
}));
//Configurar CORS
server.app.use(cors_1.default({ origin: true, credentials: true }));
//Rutas
server.app.use('/user', usuario_1.default);
server.app.use('/posts', post_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/fotosgram', (err) => {
    if (err)
        throw err;
    console.log('Base de datos online');
});
server.start(() => {
    console.log(`Corriendo en puerto: ${server.port}`);
});
// useNewUrlParser
// useCreateIndex
