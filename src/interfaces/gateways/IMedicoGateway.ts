import { Medico } from "@/models/usuario/Medico";


export interface IMedicoGateway {
    buscaMedicoByCrm(crm: string): Promise<Medico>;
}