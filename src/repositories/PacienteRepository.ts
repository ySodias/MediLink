import { IPacienteRepository } from "@/interfaces/repositories/IPacienteRepository";
import { Paciente } from "@/models/usuario/Paciente";
import { PrismaClient } from "@prisma/client";

class PacienteRepository implements IPacienteRepository {

    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }

    async getPacienteByCPF(cpf: string): Promise<Paciente> {
        const paciente = await this.prismaClient.paciente.findUnique({
            where: {
                cpf: cpf,
            },
        })
        const pacienteUnknown: unknown = paciente;
        const pacienteResponse = pacienteUnknown as Paciente
        return pacienteResponse

    }
}

export default PacienteRepository;