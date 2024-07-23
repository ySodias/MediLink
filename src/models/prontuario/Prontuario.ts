interface Prontuario {
    id: number;
    idMedico: number;
    idPaciente: number;
    createdAt: Date;
    updatedAt: Date;
}

class ProntuarioImpl implements Prontuario {
    constructor(
        public id: number,
        public idMedico: number,
        public idPaciente: number,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}

export { Prontuario, ProntuarioImpl };
