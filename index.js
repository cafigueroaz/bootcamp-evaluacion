import express from "express";

const app = express();
const PORT = 10000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor eschuchando en http://localhost:${PORT}`);
});
