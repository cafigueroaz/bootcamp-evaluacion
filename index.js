import express from "express";
import { ingresarContraseñas } from "./controlador";

const app = express();
const PORT = 10000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor eschuchando en http://localhost:${PORT}`);
});

ingresarContraseñas();
