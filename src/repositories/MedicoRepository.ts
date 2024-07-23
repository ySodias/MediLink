import { IMedicoRepository } from "@/interfaces/repositories/IMedicoRepository";
import { Medico } from "@/models/usuario/Medico";
import { PrismaClient } from "@prisma/client";

class MedicoRepository implements IMedicoRepository {

    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }

    async getMedicoByCrm(crm: string): Promise<Medico> {
        const medico = await this.prismaClient.medico.findUnique({
            include: {
                Usuario: true
            },
            where: {
                crm: crm,
            },
        })
        const medicoUnknown: unknown = medico;
        const medicoResponse = medicoUnknown as Medico
        return medicoResponse

    }
}

export default MedicoRepository;