interface Consulta {
    id: number;
    idPaciente: number;
    idMedico: number;
    horarioAgendado: Date;
    createdAt: Date;
    updatedAt: Date;
}

class ConsultaImpl implements Consulta {
    constructor(
        public id: number,
        public idPaciente: number,
        public idMedico: number,
        public horarioAgendado: Date,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}

export { Consulta, ConsultaImpl };
