import { Medico } from "@/models/usuario/Medico";
import { Paciente } from "@/models/usuario/Paciente";

export class ConsultaGateway{
    private consultaRepository;

    constructor(consultaRepository: any) {
        this.consultaRepository = consultaRepository
    }

    async criarSolicitacaoConsulta(criarSolicitacaoData: any) {
        try {
            return await this.consultaRepository.criarSolicitacaoConsulta(criarSolicitacaoData)            
        } catch (error: any) {
            console.log(error)
        }
    }

    async alterarSolicitacaoConsulta(aceitarRecusarData: any) {
        try {
            return await this.consultaRepository.alterarSolicitacaoConsulta(aceitarRecusarData)
        } catch (error: any) {
            console.log(error)
        }
    }

    async alteraAgendaMedico(alterarData: any) {
        try {
            return await this.consultaRepository.alteraAgendaMedico(alterarData)
        } catch (error: any) {
            console.log(error)
        }
    }

    async criarConsulta(criarConsultaData: any) {
        try {
            return await this.consultaRepository.criarConsulta(criarConsultaData)
        } catch (error: any) {
            console.log(error)
        }
    }

    async listarSolicitacoesConsulta() {
        try {
            return await this.consultaRepository.listarSolicitacoesConsulta()
        } catch (error: any) {
            console.log(error)
        }
    }

    async listarConsultas() {
        try {
            return await this.consultaRepository.listarConsultas()
        } catch (error: any) {
            console.log(error)
        }
    }

}