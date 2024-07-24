import { HorarioAtendimento } from "@/models/HorarioAtendimento";
import { Medico } from "@/models/usuario/Medico";

export interface IHorarioAtendimento {
    getHorarioAtendimentoByIdMedico(idMedico: number): Promise<Medico>;
    postHorarioAtendimento(horarioAtendimento: HorarioAtendimento): Promise<HorarioAtendimento>;
}