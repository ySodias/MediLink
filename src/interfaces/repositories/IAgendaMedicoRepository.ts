import { AgendaMedico } from "@/models/AgendaMedico";

export interface IAgendaMedicoRepository {
    getAgendaMedicoByIdMedico(idMedico: number): Promise<AgendaMedico>;
    postAgendaMedico(horarioAtendimento: AgendaMedico): Promise<AgendaMedico>;
    putAgendaMedico(horarioAtendimento: AgendaMedico): Promise<AgendaMedico>;
}
