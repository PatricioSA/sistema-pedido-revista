import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import router from './src/routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({origin: process.env.FRONTEND_URL}))

app.use(router)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});