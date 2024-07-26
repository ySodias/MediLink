import { FiltrarMedicoGateway } from "@/gateways/FiltrarMedicoGateway";
import { IFiltrarMedicoController } from "@/interfaces/controllers/IFiltrarMedicoController";
import { IFiltrarMedicoGateway } from "@/interfaces/gateways/IFiltrarMedicoGateway";
import { IFiltrarMedicoRepository } from "@/interfaces/repositories/IFiltrarMedicoRepository";
import { IFiltrarMedicoUseCase } from "@/interfaces/useCases/IFiltrarMedicoUseCase";
import { FiltrarMedicoUseCase } from "@/useCases/FiltrarMedicoUseCase";

export default class FiltrarMedicoController implements IFiltrarMedicoController {
    private filtrarMedicoRepository: IFiltrarMedicoRepository;
    private filtrarMedicoGateway: IFiltrarMedicoGateway;
    private filtrarMedicoUseCase: IFiltrarMedicoUseCase;

    constructor(filtrarMedicoRepository: IFiltrarMedicoRepository) {
        this.filtrarMedicoRepository = filtrarMedicoRepository;
        this.filtrarMedicoGateway = new FiltrarMedicoGateway(this.filtrarMedicoRepository)
        this.filtrarMedicoUseCase = new FiltrarMedicoUseCase(this.filtrarMedicoGateway);

    }
    async getFiltrarMedicoAll(req: any, res: any): Promise<any> {
        try {
            const response = await this.filtrarMedicoUseCase.executaFiltrarMedico()

            if (!response) {
                return res.status(404).json({response: 'Medicos não encontrado'})
            }
            return res.status(200).json({response: response})
        } catch(error){
            return res.status(400).json({response: `Problema ao buscar Medico por crm - ${error}`})
        }
    }
    async getFiltrarMedicoCrm(req: any, res: any): Promise<any> {
        const { crm } = req.params
        try {
            const response = await this.filtrarMedicoUseCase.executaFiltrarMedicoByCrm(crm)

            if (!response) {
                return res.status(404).json({response: 'Medico não encontrado'})
            }
            return res.status(200).json({response: response})
        } catch(error){
            return res.status(400).json({response: `Problema ao buscar Medico por crm - ${error}`})
        }
    }
    }




