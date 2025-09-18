import { criarContatoController, atualizarIdContatoController, atualizarApelidoContatoController, excluiContatoController } from "../controllers/contatosController.js";
import express from "express";

const router = express.Router();

router.get("/criarContato", criarContatoController);
router.get('/atualizarContato', atualizarIdContatoController);