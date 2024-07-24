import { ConsultaGateway } from './../gateways/ConsultaGateway';
import { UsuarioLogado } from "@/models/usuario/UsuarioLogado";



var jwt = require('jsonwebtoken');

export class ConsultaUseCase  {
    private consultaGateway;

    constructor(consultaGateway: any) {
        this.consultaGateway = consultaGateway;
    }

    async criarSolicitacaoConsulta(criarSolicitacaoData: any) {
        try {
            return await this.consultaGateway.criarSolicitacaoConsulta(criarSolicitacaoData)            
        } catch (error: any) {
            console.log(error)
        }
    }

    async aceitarRecusarConsulta(aceitarRecusarData: any) {
        try {
            await this.consultaGateway.alterarSolicitacaoConsulta(aceitarRecusarData)

            if (aceitarRecusarData.aceito) {
                await this.consultaGateway.alteraAgendaMedico({idAgendaMedico: aceitarRecusarData.idAgendaMedico, horarioSolicitado: true})
                await this.consultaGateway.criarConsulta(aceitarRecusarData)
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    async listarSolicitacoesConsulta() {
        try {
            return await this.consultaGateway.listarSolicitacoesConsulta()
        } catch (error: any) {
            console.log(error)
        }
    }

    async listarConsultas() {
        try {
            return await this.consultaGateway.listarConsultas()
        } catch (error: any) {
            console.log(error)
        }
    }



}
