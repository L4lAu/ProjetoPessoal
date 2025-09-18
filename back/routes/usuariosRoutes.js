import { listarUsuariosController, obterUsuarioPorIdController, cadastrarUsuarioController } from "../controllers/controller.js";
import express from "express"

const router = express.Router();

router.get('/listarUsuarios', listarUsuariosController);
router.get('/obterUsuario', obterUsuarioPorIdController);
router.get('/cadastro', cadastrarUsuarioController);
