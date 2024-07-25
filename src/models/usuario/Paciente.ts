import { Usuario } from "./Usuario";

interface Paciente extends Usuario {
    id: number;
    idUsuario: string;
    cpf: string;
    createdAt: Date;
    updatedAt: Date;
}

class PacienteImpl implements Paciente {
    constructor(
        public id: number,
        public idUsuario: string,
        public email: string,
        public senha: string,
        public nome: string,
        public cpf: string,
        public createdAt: Date, 
        public updatedAt: Date,
    ) {}
}

export { Paciente, PacienteImpl };
