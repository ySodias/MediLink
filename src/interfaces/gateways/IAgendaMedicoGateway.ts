import { AgendaMedico } from "@/models/AgendaMedico";


export interface IAgendaMedicoGateway {
    buscarAgendaMedicoByIdMedico(idMedico: number): Promise<AgendaMedico[]>;
    criarAgendaMedico(agendaMedico: any): Promise<AgendaMedico>;
    editarAgendaMedico(idAgendaMedico: number, agendaMedico: any): Promise<AgendaMedico>;
}