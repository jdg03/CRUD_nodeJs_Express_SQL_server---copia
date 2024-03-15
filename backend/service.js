import express from 'express';
import { PORT } from './config.js';
import tareasRoutes from './routes/tareas.routes.js';



const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use(tareasRoutes);

//ruta inicial
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

//npm i -> instala dependencias
//npm run dev -> corre aplicacion