import { Response, Request } from "express";

export default class ConsultaController {
    private consultaRepository: any

    constructor(consultaRepository: any) {
        this.consultaRepository = consultaRepository
    }

    async criarSolicitacaoConsulta(req: Request, res: Response) {
        const requestBody = req.body

        if (!requestBody) {
            return res
                .status(400)
                .json({ message: "Body vazio" });
        }

        try {
            await this.consultaRepository.criarSolicitacaoConsulta(requestBody)            
        } catch (error: any) {
            console.log(error)
        }

        res.send('Consulta solicitada com sucesso').status(200)
    }

    async aceitarRecusarConsulta(req: Request, res: Response) {
        try {
            const { consultaId } = req.params
            const { aceito } = req.body

            await this.consultaRepository.aceitarRecusarConsulta({ id: parseInt(consultaId), aceito })
            
            if (aceito) {
                await this.consultaRepository.criarConsulta({ id: parseInt(consultaId) })
            }
            res.send('Consulta atualizada com sucesso').status(200)
        } catch (error: any) {
            console.log(error)
            res.send('Erro ao atualizar consulta').status(500)
        }
    }

    async listarSolicitacoesConsulta(req: Request, res: Response) {
        try {
            const solicitacoes = await this.consultaRepository.listarSolicitacoesConsulta()
            res.json(solicitacoes).status(200)
        } catch (error: any) {
            console.log(error)
            res.send('Erro ao listar solicitações').status(500)
        }
    }

    async listarConsultas(req: Request, res: Response) {
        try {
            const consultas = await this.consultaRepository.listarConsultas()
            res.json(consultas).status(200)
        } catch (error: any) {
            console.log(error)
            res.send('Erro ao listar consultas').status(500)
        }
    }
}