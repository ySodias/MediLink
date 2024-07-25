import { Medico } from "@/models/usuario/Medico";

export interface IMedicoRepository {
    getMedicoByCrm(crm: string): Promise<Medico>;
}