import { readAll, read, create, update, deleteRecord } from "../config/database";


// listar usuarios
const listarUsuarios = async () => {
    try {
        return await readAll('usuarios');
    } catch (err) {
        console.error("erro ao ler usuarios", err);
        throw err;
    };
};

// obtem usuario por id
const obterUsuarioPorId = async (id) => {
    try {
        return await read('usuarios', `id = ${id}`);
    } catch (err) {
        console.error(`erro ao obter usuario de id ${id}: `, err);
        throw err;
    };
};



// cria um usuario
const cadastrarUsuario = async (usuarioData) => {
    try {
        return await create('usuarios', usuarioData);
    } catch (err) {
        console.error("erro ao cadastrar usuario: ", err)
    };
};


// cria contato
const criarContato = async (contatoData) => {
    try {
        return await create('contatos', contatoData)
    } catch (err) {
        console.error(`erro ao criar contato: `, err);
        throw err;
    };
};


// atualiza um contato 
const atualizarApelidoContato = async (contatoData, id) => {
    try {
        return await update('contato', contatoData.apelido, `where contato_id = ${contatoData.contato_id} and usuario_id = ${contatoData.usuario_id} `);
    } catch (err) {
        console.error(`erro ao atualizar contato de id ${id}: `, err);
        throw err;
    };
};

// atualiza um contato 
const atualizarIdContato = async (contatoData, id) => {
    try {
        return await update('contato', contatoData.contato_id, `where contato_id = ${contatoData.contato_id} and usuario_id = ${contatoData.usuario_id} `);
    } catch (err) {
        console.error(`erro ao atualizar contato de id ${id}: `, err);
        throw err;
    };
};


const excluiContato = async (usuario_id, contato_id) => {
    try {
        return await deleteRecord('contato', `contato_id = ${contato_id} and usuario_id =${usuario_id}`);
    } catch (err) {
        console.error(`erro ao excluir contato de id ${contato_id}: `, err);
        throw err;
    }
}


export { listarUsuarios, obterUsuarioPorId, cadastrarUsuario, criarContato, atualizarApelidoContato, atualizarIdContato, excluiContato }
