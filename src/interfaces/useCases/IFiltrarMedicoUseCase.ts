import { AgendaMedico } from "@/models/AgendaMedico";


export interface IFiltrarMedicoUseCase {
    executaFiltrarMedicoByCrm(crm: string): Promise<any>;
    executaFiltrarMedico(): Promise<any>;
}
