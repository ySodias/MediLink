interface HorarioAtendimento {
    id: number;
    idMedico: number;
    horarioDisponivel: string;
    createdAt: Date;
    updatedAt: Date;
}

class HorarioAtendimentoImpl implements HorarioAtendimento {
    constructor(
        public id: number,
        public idMedico: number,
        public horarioDisponivel: string,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}

export { HorarioAtendimento, HorarioAtendimentoImpl };
