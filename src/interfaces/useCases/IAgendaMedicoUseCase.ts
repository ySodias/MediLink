import { AgendaMedico } from "@/models/AgendaMedico";


export interface iAgendaMedicoUseCase {
    executaBuscarAgendaMedicoByIdMedico(crm: string): Promise<AgendaMedico>;
    executaCriarAgendaMedico(agendaMedico: any): Promise<AgendaMedico>;
    executaEditarAgendaMedico(agendaMedico: any): Promise<AgendaMedico>;
}