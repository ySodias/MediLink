interface Usuario {
    id: number;
    email: string;
    senha: string;
    createdAt: Date;
    updatedAt: Date;
}

class UsuarioImpl implements Usuario {
    constructor(
        public id: number,
        public email: string,
        public senha: string,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}

export { Usuario, UsuarioImpl };
