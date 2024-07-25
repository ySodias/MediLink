interface Consulta {
    id: number;
    idRequisicaoConsulta: number;
    horarioAgendado: Date;
    createdAt: Date; 
    updatedAt: Date;
}

class ConsultaImpl implements Consulta {
    constructor(
        public id: number,
        public idRequisicaoConsulta: number,
        public horarioAgendado: Date,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}

export { Consulta, ConsultaImpl };
