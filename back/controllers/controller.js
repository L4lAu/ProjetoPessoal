import  {listarUsuarios, obterUsuarioPorId, cadastrarUsuario, criarContato, atualizarContato, excluiContato}  from "../models/model.js";


const listarUsuariosController = async (req, res) => {
    try{
        const usuarios = await listarUsuarios();
        res.status(200).send(usuarios);
    } catch (err) {
        res.status(500).json({message: 'erro interno no servidor', err});
        console.error(err);
    };
};