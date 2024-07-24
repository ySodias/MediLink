import { PrismaClient } from "@prisma/client";

class ConsultaRepository {

    private prismaClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }

    async criarSolicitacaoConsulta(criarSolicitacaoData: any): Promise<void> {
        await this.prismaClient.requisicaoConsulta.create({
            data:{
                aceito: null,
                idMedico: criarSolicitacaoData.idMedico,
                idPaciente: criarSolicitacaoData.idPaciente,
                idAgendaMedico: criarSolicitacaoData.idAgendaMedico
            }
        })
    }

    async aceitarRecusarConsulta(aceitarRecusarData: any): Promise<void> {
        await this.prismaClient.requisicaoConsulta.update({
            where:{
                id: aceitarRecusarData.id
            },
            data:{
                aceito: aceitarRecusarData.aceito
            }
        })

    }

    async criarConsulta(criarConsultaData: any): Promise<void> {
        await this.prismaClient.consulta.create({
            data:{
                idRequisicaoConsulta: criarConsultaData.id,
                pacienteId: criarConsultaData.pacienteId,
                medicoId: criarConsultaData.medicoId,
            }
        })
    }

    async listarSolicitacoesConsulta(): Promise<any> {
        return await this.prismaClient.requisicaoConsulta.findMany()
    }

    async listarConsultas(): Promise<any> {
        return await this.prismaClient.consulta.findMany()
    }
}

export default ConsultaRepository;