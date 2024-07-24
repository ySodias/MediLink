import { AgendaMedico } from "@/models/AgendaMedico";

export interface IAgendaMedico {
    getAgendaMedicoByIdMedico(idMedico: number): Promise<AgendaMedico>;
    postAgendaMedico(horarioAtendimento: AgendaMedico): Promise<AgendaMedico>;
    putAgendaMedico(horarioAtendimento: AgendaMedico): Promise<AgendaMedico>;
}
