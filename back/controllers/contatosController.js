import { criarContato, atualizarApelidoContato, atualizarIdContato, excluiContato } from "../models/model.js";


const criarContatoController = async (req, res) => {
    try {
        const { usuario_id, contato_id, apelido } = req.body;

        const contatoData = {
            usuario_id: usuario_id,
            contato_id: contato_id,
            apelido: apelido,
        };

        const novoContato = await criarContato(contatoData);
        res.status(201).json({ message: "contato adicionado com sucesso", novoContato })
    } catch (err) {
        res.status(500).json("erro ao adicionar contato", err);
        console.error('erro ao adicionar contato', err);
    };
};

const atualizarIdContatoController = async (req, res) => {
    try {
        const { apelido, contato_id, usuario_id } = req.body;

        const contatoData = {
            apelido: apelido,
            contato_id: contato_id,
            usuario_id: usuario_id,
        };

        const novoIdContato = await atualizarIdContato(contatoData);
        res.status(201).json({ message: 'contato atualizado com sucesso', novoIdContato });
    } catch (err) {
        res.status(500).json("erro ao atualizar contato", err);
        console.error('erro ao atualizar contato', err);
    };
};

const atualizarApelidoContatoController = async (req, res) => {
    try {
        const { apelido, contato_id, usuario_id } = req.body;

        const contatoData = {
            apelido: apelido,
            contato_id: contato_id,
            usuario_id: usuario_id,
        };

        const novoApelidoContato = await atualizarApelidoContato(contatoData);
        res.status(201).json({ message: 'apelido do contato atualizado com sucesso', novoApelidoContato });
    } catch (err) {
        res.status(500).json("erro ao atualizar contato", err);
        console.error('erro ao atualizar contato', err);
    };
};

const excluiContatoController = async (req, res) => {
    try {
        const { contato_id, usuario_id} = req.body;
        
        const deleteData = {
            contato_id,
            usuario_id,
        };
        
        const contatoExcluido = await excluiContato(deleteData);
        res.status(201).json({message: 'contato excluido com sucesso', contatoExcluido})
    } catch(err) {
        res.status(500).json("erro ao exluir contato: ", err);
        console.error("erro em excluir conntato: ", err)
    }
}

export default { criarContatoController, atualizarIdContatoController, atualizarApelidoContatoController, excluiContatoController}