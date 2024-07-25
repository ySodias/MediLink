import { IAgendaMedicoGateway } from "@/interfaces/gateways/IAgendaMedicoGateway";
import { IMedicoGateway } from "@/interfaces/gateways/IMedicoGateway";
import { IAgendaMedicoUseCase } from "@/interfaces/useCases/IAgendaMedicoUseCase";
import { AgendaMedico } from "@/models/AgendaMedico";


export class AgendaMedicoUseCase implements IAgendaMedicoUseCase {
    private agendaMedicoGateway: IAgendaMedicoGateway;
    private medicoGateway: IMedicoGateway;

    constructor(agendaMedicoGateway: IAgendaMedicoGateway, medicoGateway: IMedicoGateway) {
        this.agendaMedicoGateway = agendaMedicoGateway;
        this.medicoGateway = medicoGateway;
    }

    async executaBuscarAgendaMedicoByCrm(crm: string): Promise<AgendaMedico[]> {
        try {
            const medico = await this.medicoGateway.buscaMedicoByCrm(crm);
            const agendaMedicoResponse = await this.agendaMedicoGateway.buscarAgendaMedicoByIdMedico(medico.id);
            return agendaMedicoResponse
        } catch(error) {
            throw new Error(`${error}`)
        }
    };
    async executaCriarAgendaMedico(agendaMedico: any): Promise<AgendaMedico> {
        try {
            const agendaMedicoResponse = await this.agendaMedicoGateway.criarAgendaMedico(agendaMedico);
            return agendaMedicoResponse
        } catch(error){
            throw new Error(`${error}`)
        }
    };
    async executaEditarAgendaMedico(idAgendaMedico: number, agendaMedico: any): Promise<AgendaMedico> {
        try {
            const agendaMedicoResponse = await this.agendaMedicoGateway.editarAgendaMedico(idAgendaMedico, agendaMedico);
            return agendaMedicoResponse
        } catch(error){
            throw new Error(`${error}`)
        }
    };
}
