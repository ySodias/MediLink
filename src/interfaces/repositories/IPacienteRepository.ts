import { Paciente } from "@/models/usuario/Paciente";

export interface IPacienteRepository {
    getPacienteByCPF(cpf: string): Promise<Paciente>;
}