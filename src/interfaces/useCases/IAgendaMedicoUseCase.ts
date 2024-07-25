import { AgendaMedico } from "@/models/AgendaMedico";


export interface IAgendaMedicoUseCase {
    executaBuscarAgendaMedicoByCrm(crm: string): Promise<AgendaMedico[]>;
    executaCriarAgendaMedico(agendaMedico: any): Promise<AgendaMedico>;
    executaEditarAgendaMedico(idAgendaMedico: number, agendaMedico: any): Promise<AgendaMedico>;
}