interface Usuario {
    id: number;
    email: string;
    nome: string;
    senha: string;
    createdAt: Date;
    updatedAt: Date;
}

class UsuarioImpl implements Usuario {
    constructor(
        public id: number,
        public email: string,
        public nome: string,
        public senha: string,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}

export { Usuario, UsuarioImpl };
