interface AgendaMedico {
    id: number;
    idMedico: number;
    horarioDisponivel: Date;
    horarioSolicitado: boolean;
    createdAt: Date;
    updatedAt: Date;
}

class AgendaMedicoImpl implements AgendaMedico {
    constructor(
        public id: number,
        public idMedico: number,
        public horarioDisponivel: Date,
        public horarioSolicitado: boolean,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}

export { AgendaMedico, AgendaMedicoImpl };
