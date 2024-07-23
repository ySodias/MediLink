interface AcessoProntuario {
    id: number;
    idProntuario: number;
    idPaciente: number;
    idMedicoLiberado: number;
    createdAt: Date;
    updatedAt: Date;
}

class AcessoProntuarioImpl implements AcessoProntuario {
    constructor(
        public id: number,
        public idProntuario: number,
        public idPaciente: number,
        public idMedicoLiberado: number,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}

export { AcessoProntuario, AcessoProntuarioImpl };
