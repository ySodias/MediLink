
import { AgendaMedicoGateway } from "@/gateways/AgendaMedicoGateway";
import { MedicoGateway } from "@/gateways/MedicoGateway";
import { IAgendaMedicoController } from "@/interfaces/controllers/IAgendaMedicoController";
import { IAgendaMedicoGateway } from "@/interfaces/gateways/IAgendaMedicoGateway";
import { IMedicoGateway } from "@/interfaces/gateways/IMedicoGateway";
import { IAgendaMedicoRepository } from "@/interfaces/repositories/IAgendaMedicoRepository";
import { IMedicoRepository } from "@/interfaces/repositories/IMedicoRepository";
import { IAgendaMedicoUseCase } from "@/interfaces/useCases/IAgendaMedicoUseCase";
import { AgendaMedicoUseCase } from "@/useCases/AgendaMedicoUseCase";
import { Response, Request } from "express";

export default class AgendaMedicoController implements IAgendaMedicoController {
    private agendaMedicoRepository: IAgendaMedicoRepository;
    private medicoRepository: IMedicoRepository;
    private medicoGateway: IMedicoGateway;
    private agendaMedicoGateway: IAgendaMedicoGateway;
    private agendaMedicoUseCase: IAgendaMedicoUseCase;

    constructor(agendaMedicoRepository: IAgendaMedicoRepository, medicoRepository: IMedicoRepository) {
        this.agendaMedicoRepository = agendaMedicoRepository;
        this.agendaMedicoGateway = new AgendaMedicoGateway(this.agendaMedicoRepository)
        this.medicoRepository = medicoRepository;
        this.medicoGateway = new MedicoGateway(this.medicoRepository);
        this.agendaMedicoUseCase = new AgendaMedicoUseCase(this.agendaMedicoGateway, this.medicoGateway);

    }
    
    async getAgendaMedico(req: Request, res: Response): Promise<any> {
        const { crm } = req.params
        try {
            const response = await this.agendaMedicoUseCase.executaBuscarAgendaMedicoByCrm(crm)
            if (!response) {
                return res.status(404).json({msg: 'Agenda Medico não encontrada'})
            }
            return res.status(200).json({msg: response})
        } catch(error){
            return res.status(400).json({msg: `Problema ao buscar Agenda Medico - ${error}`})
        }
    }    
    
    async postAgendaMedico(req: any, res: any): Promise<any> {
        const agendaMedicoBody = req.body
        try {
            const response = await this.agendaMedicoUseCase.executaCriarAgendaMedico(agendaMedicoBody)
            return res.status(201).json({msg: response})
        } catch(error){
            return res.status(400).json({msg: `Problema ao Criar Agenda Medico - ${error}`})
        }
    }

    async putAgendaMedico(req: any, res: any): Promise<any> {
        const agendaMedicoBody = req.body
        const { id } = req.params
        try {
            const response = await this.agendaMedicoUseCase.executaEditarAgendaMedico(id, agendaMedicoBody)
            return res.status(200).json({msg: response})
        } catch(error){
            return res.status(400).json({msg: `Problema ao Atualizar Agenda Medico - ${error}`})
        }
    }

}