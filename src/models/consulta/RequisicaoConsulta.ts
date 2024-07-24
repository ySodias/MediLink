interface RequisicaoConsulta {
    id: number;
    idAgenda: number;
    aceito: boolean;
    idMedico: number;
    idPaciente: number;
    createdAt: Date;
    updatedAt: Date;
}

class RequisicaoConsultaImpl implements RequisicaoConsulta {
    constructor(
        public id: number,
        public idAgenda: number,
        public aceito: boolean,
        public idMedico: number,
        public idPaciente: number,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}

export { RequisicaoConsulta, RequisicaoConsultaImpl };
 