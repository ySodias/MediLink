import { IAuthGateway } from "@/interfaces/gateways/IAuthGateway";
import { IMedicoRepository } from "@/interfaces/repositories/IMedicoRepository";
import { IPacienteRepository } from "@/interfaces/repositories/IPacienteRepository";
import { Medico } from "@/models/usuario/Medico";
import { Paciente } from "@/models/usuario/Paciente";

export class AuthGateway implements IAuthGateway {
    private pacienteRepository: IPacienteRepository;
    private medicoRepository: IMedicoRepository;

    constructor(pacienteRepository: IPacienteRepository, medicoRepository: IMedicoRepository) {
        this.pacienteRepository = pacienteRepository;
        this.medicoRepository = medicoRepository
    }

    async efetuarLogin(loginData: any, tipoUsuario: string): Promise<Medico | Paciente>  {
        try {
            if (tipoUsuario == 'medico') {
                const usuario = this.medicoRepository.getMedicoByCrm(loginData.crm)
                return usuario
            } else {
                const usuario = this.pacienteRepository.getPacienteByCPF(loginData.cpf)
                return usuario
            }
        } catch (error) {
            throw new Error("Erro ao buscar registro no Banco!");
        }
    }
}