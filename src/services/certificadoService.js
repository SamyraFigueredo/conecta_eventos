const { Certificado, Inscricao, Usuario, Evento } = require('../models/associations.js');

const criarCertificado = async (dados) => {
    return await Certificado.create(dados);
};

const listarCertificados = async () => {
    return await Certificado.findAll({
        include: [
            {
                model: Inscricao,
                include: [
                    { model: Usuario, attributes: ['id_usuario', 'nome', 'email'] },
                    { model: Evento, attributes: ['id_evento', 'titulo'] }
                ]
            }
        ]
    });
};

const buscarPorId = async (id) => {
    return await Certificado.findByPk(id, {
        include: [
            {
                model: Inscricao,
                include: [
                    { model: Usuario, attributes: ['id_usuario', 'nome'] },
                    { model: Evento, attributes: ['id_evento', 'titulo'] }
                ]
            }
        ]
    });
};

const buscarPorCodigo = async (codigo) => {
    return await Certificado.findOne({
        where: { codigo_validacao: codigo },
        include: [
            {
                model: Inscricao,
                include: [
                    { model: Usuario, attributes: ['nome', 'email'] },
                    { model: Evento, attributes: ['titulo'] }
                ]
            }
        ]
    });
};

const atualizarCertificado = async (id, dadosAtualizados) => {
    const certificado = await Certificado.findByPk(id);
    if (!certificado) return null;
    await certificado.update(dadosAtualizados);
    return certificado;
};

const deletarCertificado = async (id) => {
    const certificado = await Certificado.findByPk(id);
    if (!certificado) return null;
    await certificado.destroy();
    return true;
};

module.exports = {
    criarCertificado,
    listarCertificados,
    buscarPorId,
    buscarPorCodigo,
    atualizarCertificado,
    deletarCertificado,
};