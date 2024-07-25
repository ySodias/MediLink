interface ArquivosProntuario {
    id: number;
    idProntuario: number;
    idEspecialidadeMedica: number;
    linkS3: number;
    tipoArquivo: string;
    createdAt: Date;
    updatedAt: Date;
}

class ArquivosProntuarioImpl implements ArquivosProntuario {
    constructor(
        public id: number,
        public idProntuario: number,
        public idEspecialidadeMedica: number,
        public linkS3: number,
        public tipoArquivo: string,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}

export { ArquivosProntuario, ArquivosProntuarioImpl }; 