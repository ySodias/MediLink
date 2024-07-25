import { AgendaMedico } from "@/models/AgendaMedico";

export interface IAgendaMedicoRepository {
    getAgendaMedicoByIdMedico(idMedico: number): Promise<AgendaMedico[]>;
    postAgendaMedico(agendaMedicoData: any): Promise<AgendaMedico>;
    putAgendaMedico(idAgendaMedico: number, agendaMedicoData: any): Promise<AgendaMedico>;
}
