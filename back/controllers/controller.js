import { listarUsuarios, obterUsuarioPorId, cadastrarUsuario, criarContato, atualizarApelidoContato, atualizarIdContato, excluiContato } from "../models/model.js";


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
        const {usuario_id, contato_id, apelido} = req.body;

        const contatoData = {
            usuario_id: usuario_id,
            contato_id: contato_id,
            apelido: apelido,
        };

        const novoContato = await criarContato(contatoData);
        res.status(201).json({ message: "contato adicionado com sucesso", novoContato})
    } catch (err) {
        res.status(500).json("erro ao adicionar contato", err);
        console.error('erro ao adicionar contato', err);
    };
};

const atualizarContatoController = async (req, res) => {
    try{
        const {apelido, contato_id, usuario_id} = req.body;
        
        const contatoData = {
            apelido: apelido,
            contato_id: contato_id, 
            usuario_id: usuario_id,
        };

        const novoIdContato = await atualizarIdContato(contatoData);
        const novoApelidoContato = await atualizarApelidoContato(contatoData);

        res.status(201).json({ message: 'contato atualizado com sucesso', novoIdContato, novoApelidoContato});
    } catch (err) {
        res.status(500).json("erro ao atualizar contato", err);
        console.error('erro ao atualizar contato', err);
    };
};