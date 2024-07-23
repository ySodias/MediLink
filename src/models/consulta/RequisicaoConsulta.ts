interface RequisicaoConsulta {
    id: number;
    idConsulta: number;
    aceito: boolean;
    createdAt: Date;
    updatedAt: Date;
}

class RequisicaoConsultaImpl implements RequisicaoConsulta {
    constructor(
        public id: number,
        public idConsulta: number,
        public aceito: boolean,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}

export { RequisicaoConsulta, RequisicaoConsultaImpl };
 