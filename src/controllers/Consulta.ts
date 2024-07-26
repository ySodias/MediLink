import { ConsultaGateway } from "@/gateways/ConsultaGateway";
import { ConsultaUseCase } from "@/useCases/ConsultaUseCase";
import { Response, Request } from "express";

export default class ConsultaController {
    private consultaGateway: any
    private consultaUseCase: any

    constructor(consultaRepository: any) {
        this.consultaGateway = new ConsultaGateway(consultaRepository)
        this.consultaUseCase = new ConsultaUseCase(this.consultaGateway)
    }

    async criarSolicitacaoConsulta(req: Request, res: Response) {
        const requestBody = req.body

        if (!requestBody) {
            return res
                .status(400)
                .json({ message: "Body vazio" });
        }

        try {
            await this.consultaUseCase.criarSolicitacaoConsulta(requestBody)
            res.send('Solicitação de consulta criada com sucesso').status(200)        
        } catch (error: any) {
            console.log(error)
        }
    }

    async aceitarRecusarConsulta(req: Request, res: Response) {
        try {
            const { consultaId } = req.params
            const { aceito, idAgendaMedico } = req.body

            await this.consultaUseCase.aceitarRecusarConsulta({ id: parseInt(consultaId), aceito, idAgendaMedico: parseInt(idAgendaMedico)})
            
            res.send('Consulta atualizada com sucesso').status(200)
        } catch (error: any) {
            console.log(error)
            res.send('Erro ao atualizar consulta').status(500)
        }
    }

    async listarSolicitacoesConsulta(req: Request, res: Response) {
        try {
            const solicitacoes = await this.consultaUseCase.listarSolicitacoesConsulta()
            res.json(solicitacoes).status(200)
        } catch (error: any) {
            console.log(error)
            res.send('Erro ao listar solicitações').status(500)
        }
    }

    async listarConsultas(req: Request, res: Response) {
        try {
            const consultas = await this.consultaUseCase.listarConsultas()
            res.json(consultas).status(200)
        } catch (error: any) {
            console.log(error)
            res.send('Erro ao listar consultas').status(500)
        }
    }
}