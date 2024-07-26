import { IFiltrarMedicoRepository } from "@/interfaces/repositories/IFiltrarMedicoRepository";
import { PrismaClient } from "@prisma/client";

export class FiltrarMedicoRepository implements IFiltrarMedicoRepository{

    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }
   async getFiltrarMedico(): Promise<any> {
    try {
        const filtrarMedico = await this.prismaClient.medico.findMany()
        const filtrarMedicoUnknown: unknown = filtrarMedico;
        const filtrarMedicoResponse = filtrarMedicoUnknown as any
        return filtrarMedicoResponse
    } catch(error){
        throw error
    }
}


    async getFiltrarMedicoByCrm(crm: string): Promise<any> {
        try {
            const filtrarMedico = await this.prismaClient.medico.findUnique({
                where: {
                    crm: crm,
                },
            })
            const filtrarMedicoUnknown: unknown = filtrarMedico;
            const filtrarMedicoResponse = filtrarMedicoUnknown as any
            return filtrarMedicoResponse
        } catch(error){
            throw error
        }
    }

}
