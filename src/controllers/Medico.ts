import { PrismaClient } from '@prisma/client';
import { Response, Request } from "express";

export default class MedicoController {
    private PrismaClient

    constructor(PrismaClient: PrismaClient) {
        this.PrismaClient = PrismaClient
    }

    async consultarPorCRM(req: Request, res: Response) {

        const { crm } = req.params

        try {
            const medico = await this.PrismaClient.medico.findUnique({
                where: {
                    crm: crm
                }
            })

            console.log(medico)
            res.json(medico).status(200)
        } catch (error: any) {
            console.log(error)
            res.send('Erro ao consultar médico').status(500)
        }
    }
}