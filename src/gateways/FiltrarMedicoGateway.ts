import { IFiltrarMedicoGateway } from "@/interfaces/gateways/IFiltrarMedicoGateway";
import { IFiltrarMedicoRepository } from "@/interfaces/repositories/IFiltrarMedicoRepository";

export class FiltrarMedicoGateway implements IFiltrarMedicoGateway{
    private filtrarMedicoRepository: IFiltrarMedicoRepository;
    constructor(filtrarMedicoRepository: IFiltrarMedicoRepository) {
        this.filtrarMedicoRepository = filtrarMedicoRepository
    }
    async filtrarMedico(): Promise<any> {
        try {
            const filtrarMedicoResponse = await this.filtrarMedicoRepository.getFiltrarMedico()
            return filtrarMedicoResponse
        } catch(error) {
            throw new Error(`Erro ao Buscar Medico por CRM - ${error}`)
        }
    }

    async filtrarMedicoByCrm(crm: string): Promise<any> {
        try {
            const filtrarMedicoResponse = await this.filtrarMedicoRepository.getFiltrarMedicoByCrm(crm)
            return filtrarMedicoResponse
        } catch(error) {
            throw new Error(`Erro ao Buscar Medico por CRM - ${error}`)
        }
    }

}
