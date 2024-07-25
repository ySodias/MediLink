
import { IAgendaMedicoGateway } from "@/interfaces/gateways/IAgendaMedicoGateway";
import { IAgendaMedicoRepository } from "@/interfaces/repositories/IAgendaMedicoRepository";
import { AgendaMedico } from "@/models/AgendaMedico";

export class AgendaMedicoGateway implements IAgendaMedicoGateway {
    private agendaMedicoRepository: IAgendaMedicoRepository;
    constructor(agendaMedicoRepository: IAgendaMedicoRepository) {
        this.agendaMedicoRepository = agendaMedicoRepository
    }

    async buscarAgendaMedicoByIdMedico(id: number): Promise<AgendaMedico[]> {
        try {
            const agendaMedicoResponse = await this.agendaMedicoRepository.getAgendaMedicoByIdMedico(id)
            return agendaMedicoResponse
        } catch(error) {
            throw new Error(`Erro ao Buscar Agenda Medico - ${error}`)
        }
    }

    async criarAgendaMedico(agendaMedico: any): Promise<AgendaMedico>{
        try {
            const agendaMedicoResponse = await this.agendaMedicoRepository.postAgendaMedico(agendaMedico)
            return agendaMedicoResponse
        } catch(error) {
            throw new Error(`Erro ao Criar Agenda Medico - ${error}`)
        }

    }

    async editarAgendaMedico(idAgendaMedico: number, agendaMedico: any): Promise<AgendaMedico> {
        try {
            const agendaMedicoResponse = await this.agendaMedicoRepository.putAgendaMedico(idAgendaMedico, agendaMedico)
            return agendaMedicoResponse
        } catch(error) {
            throw new Error(`Erro ao Editar Agenda Medico - ${error}`)
        }
    }
}