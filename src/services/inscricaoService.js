const { Inscricao, Usuario, Evento } = require('../models/associations.js');

const criarInscricao = async (dados) => {
    return await Inscricao.create(dados);
};

const listarInscricoes = async () => {
    return await Inscricao.findAll({
        include: [
            { model: Usuario, attributes: ['id_usuario', 'nome'] },
            { model: Evento, attributes: ['id_evento', 'titulo'] },
        ],
    });
};

const buscarInscricaoPorId = async (id) => {
    return await Inscricao.findByPk(id, {
        include: [
            { model: Usuario, attributes: ['id_usuario', 'nome', 'email'] },
            { model: Evento, attributes: ['id_evento', 'titulo', 'descricao'] },
        ],
    });
};

const atualizarInscricao = async (id, dadosAtualizados) => {
    const inscricao = await Inscricao.findByPk(id);
    if (!inscricao) return null;
    await inscricao.update(dadosAtualizados);
    return inscricao;
};

const deletarInscricao = async (id) => {
    const inscricao = await Inscricao.findByPk(id);
    if (!inscricao) return null;
    await inscricao.destroy();
    return true;
};

// Novo método: listar inscrições por evento
const listarPorEvento = async (idEvento) => {
    return await Inscricao.findAll({
        where: { id_evento: idEvento },
        include: [
            { model: Usuario, attributes: ['id_usuario', 'nome'] },
            { model: Evento, attributes: ['id_evento', 'titulo'] },
        ],
    });
};

// Novo método: listar inscrições por usuário
const listarPorUsuario = async (idUsuario) => {
    return await Inscricao.findAll({
        where: { id_usuario: idUsuario },
        include: [
            { model: Evento, attributes: ['id_evento', 'titulo'] },
        ],
    });
};

module.exports = {
    criarInscricao,
    listarInscricoes,
    buscarInscricaoPorId,
    atualizarInscricao,
    deletarInscricao,
    listarPorEvento,
    listarPorUsuario,
};
