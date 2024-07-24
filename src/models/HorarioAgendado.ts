interface HorarioAgendado {
    id: number;
    idHorarioAtendimento: number;
    idRequisicaoConsulta: number;
    createdAt: Date;
    updatedAt: Date;
}

class HorarioAgendadoImpl implements HorarioAgendado {
    constructor(
        public id: number,
        public idHorarioAtendimento: number,
        public idRequisicaoConsulta: number,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}

export { HorarioAgendado, HorarioAgendadoImpl };
