import { listarUsuarios, obterUsuarioPorId, cadastrarUsuario, criarContato, atualizarContato, excluiContato } from "../models/model.js";


const listarUsuariosController = async (req, res) => {
    try {
        const usuarios = await listarUsuarios();
        res.status(200).send(usuarios);
    } catch (err) {
        res.status(500).json({ message: 'erro interno no servidor', err });
        console.error(err);
    };
};

const obterUsuarioPorIdController = async (req, res) => {
    try {
        const usuario = await obterUsuarioPorId(req.params.id);

        if (!usuario) {
            return res.status(404).json({ message: 'usuario não encontrado' });
        }

        res.status(200).json(usuario);
    } catch (err) {
        res.status(500).json({ message: "erro interno no servidor: ", err });
        console.error(err);
    };
};

const cadastrarUsuarioController = async (req, res) => {
    try {
        const { nome, email, senha, tipo } = req.body;

        const usuarioData = {
            nome: nome,
            email: email,
            senha: senha
        };

        const usuarioNovo = await cadastrarUsuario(usuarioData);
        res.status(201).json({ message: "usuario criado com sucesso", usuarioNovo });
    } catch (err) {
        res.status(500).json("erro ao cadastrar usuario", err)
        console.error('erro ao cadastrar usuario', err);
    };
};

const criarContatoController = async (req, res) => {
    try {
        const {apelido, usuario_id}
    }
}