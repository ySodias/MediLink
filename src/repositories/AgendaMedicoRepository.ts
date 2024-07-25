import { IAgendaMedicoRepository } from "@/interfaces/repositories/IAgendaMedicoRepository";
import { AgendaMedico } from "@/models/AgendaMedico";
import { PrismaClient } from "@prisma/client";

class AgendaMedicoRepository implements IAgendaMedicoRepository {

    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }

    async getAgendaMedicoByIdMedico(idMedico: number): Promise<AgendaMedico[]> {
        try {
            const agendaMedico = await this.prismaClient.agendaMedico.findMany({
                where: {
                    idMedico: idMedico,
                },
            })
            const agendaMedicoUnknown: unknown = agendaMedico;
            const agendaMedicoResponse = agendaMedicoUnknown as AgendaMedico[]
            return agendaMedicoResponse
        } catch(error){
            throw error
        }
    }

    async postAgendaMedico(agendaMedicoData: AgendaMedico): Promise<AgendaMedico> {
        try {
            const agendaMedico = await this.prismaClient.agendaMedico.create({
                data: {
                    idMedico: agendaMedicoData.idMedico,
                    horarioDisponivel: agendaMedicoData.horarioDisponivel,
                    horarioSolicitado: agendaMedicoData.horarioSolicitado
                }
            })
            const agendaMedicoUnknown: unknown = agendaMedico;
            const agendaMedicoResponse = agendaMedicoUnknown as AgendaMedico;
            return agendaMedicoResponse
        } catch(error) {
            throw error
        }
        
    }

    async putAgendaMedico(idAgendaMedico: number, agendaMedicoData: AgendaMedico): Promise<AgendaMedico> {
        try {
            const agendaMedico = await this.prismaClient.agendaMedico.update({
                where: {
                    id: idAgendaMedico
                },
                data: {
                    horarioDisponivel: agendaMedicoData.horarioDisponivel,
                    horarioSolicitado: agendaMedicoData.horarioSolicitado
                }
            })
            return agendaMedico
        } catch(error) {
            throw error
        }
    }

}

export default AgendaMedicoRepository;