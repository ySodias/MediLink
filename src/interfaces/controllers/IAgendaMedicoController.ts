import { AgendaMedico } from "@/models/AgendaMedico";

export interface IAgendaMedicoController {
    getAgendaMedico(req: any, res: any): Promise<AgendaMedico[]>;
    putAgendaMedico(req: any, res: any): Promise<AgendaMedico>;
    postAgendaMedico(req: any, res: any): Promise<AgendaMedico>;
}