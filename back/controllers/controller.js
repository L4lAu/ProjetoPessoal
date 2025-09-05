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

const obterUsuarioPorIdController = async (req, res) => {
    try {
        const usuario = await obterUsuarioPorId(req.params.id);

        if(!usuario){
            return res.status(404).json({message: 'usuario não encontrado' });
        }

        res.status(200).json(usuario);
    } catch (err) {
        res.status(500).json({message: "erro interno no servidor: ", err});
        console.error(err);
    };
};