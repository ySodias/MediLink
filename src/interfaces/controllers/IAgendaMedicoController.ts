import { AgendaMedico } from "@/models/AgendaMedico";

export interface IAgendaMedicoController {
    getAgendaMedico(req: any, res: any): Promise<any>;
    putAgendaMedico(req: any, res: any): Promise<any>;
    postAgendaMedico(req: any, res: any): Promise<any>;
}