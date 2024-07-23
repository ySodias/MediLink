interface Telemedicina {
    id: number;
    idConsulta: number;
    linkChamada: string;
    createdAt: Date;
    updatedAt: Date;
}

class TelemedicinaImpl implements Telemedicina {
    constructor(
        public id: number,
        public idConsulta: number,
        public linkChamada: string,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}

export { Telemedicina, TelemedicinaImpl };
