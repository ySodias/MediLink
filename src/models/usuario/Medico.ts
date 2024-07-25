import { Usuario } from "./Usuario";

interface Medico extends Usuario {
    id: number;
    idUsuario: number;
    idEspecialidade: number;
    crm: string;
    createdAt: Date;
    updatedAt: Date;
}

class MedicoImpl implements Medico {
    constructor(
        public id: number,
        public idUsuario: number,
        public idEspecialidade: number,
        public crm: string,
        public nome: string,
        public email: string,
        public senha: string,
        public createdAt: Date, 
        public updatedAt: Date,
    ) {}
}

export { Medico, MedicoImpl };
