const { Programacao, Evento, Usuario } = require('../models/associations');

const ProgramacaoService = {
    async listarTodos() {
        return await Programacao.findAll({
            include: [
                { model: Evento },
                { model: Usuario, as: 'ministrante' }
            ]
        });
    },

    async buscarPorId(id) {
        const programacao = await Programacao.findByPk(id, {
            include: [
                { model: Evento },
                { model: Usuario, as: 'ministrante' }
            ]
        });
        if (!programacao) {
            throw new Error('Programação não encontrada');
        }
        return programacao;
    },

    async criar(dados) {
        return await Programacao.create(dados);
    },

    async atualizar(id, dados) {
        const programacao = await Programacao.findByPk(id);
        if (!programacao) {
            throw new Error('Programação não encontrada');
        }
        await programacao.update(dados);
        return programacao;
    },

    async deletar(id) {
        const programacao = await Programacao.findByPk(id);
        if (!programacao) {
            throw new Error('Programação não encontrada');
        }
        await programacao.destroy();
    }
};

module.exports = ProgramacaoService;