import { IFiltrarMedicoGateway } from "@/interfaces/gateways/IFiltrarMedicoGateway";
import { IFiltrarMedicoUseCase } from "@/interfaces/useCases/IFiltrarMedicoUseCase";

export class FiltrarMedicoUseCase implements IFiltrarMedicoUseCase{
    private filtrarMedicoGateway: IFiltrarMedicoGateway;

    constructor(filtrarMedicoGateway: IFiltrarMedicoGateway) {
        this.filtrarMedicoGateway = filtrarMedicoGateway;
    }
    async executaFiltrarMedico(): Promise<any> {
        try {
            const medico = await this.filtrarMedicoGateway.filtrarMedico();
            return medico;
        } catch(error) {
            throw new Error(`${error}`)
        }
    }

    async executaFiltrarMedicoByCrm(crm: string): Promise<any> {
        try {
            const medico = await this.filtrarMedicoGateway.filtrarMedicoByCrm(crm);
            return medico;
        } catch(error) {
            throw new Error(`${error}`)
        }
    }

}
