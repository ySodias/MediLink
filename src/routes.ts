import { PrismaClient } from '@prisma/client';
import { Application } from 'express';
import { HealthController } from '@/controllers';
import PacienteRepository from './repositories/PacienteRepository';
import MedicoRepository from './repositories/MedicoRepository';
import { AuthGateway } from './gateways/AuthGateway';
import { AuthUseCase } from './useCases/AuthUseCase';
import AuthController from './controllers/Auth';
import { validarLogin } from './controllers/middleware/AuthMiddleware';
import ConsultaController from './controllers/Consulta';
import ConsultaRepository from './repositories/ConsultaRepository';
import MedicoController from './controllers/Medico';


export class Routes {
    private app: Application;
    private prisma: PrismaClient;
    private BASE_URL = "/api"

    constructor(app: Application, prisma: PrismaClient) {
        this.app = app;
        this.prisma = prisma;
        this.setupRoutes();
    }

    private setupRoutes() {
        const healthController = new HealthController();
        const pacienteRepository = new PacienteRepository(this.prisma);
        const medicoRepository = new MedicoRepository(this.prisma);
        const authController = new AuthController(pacienteRepository, medicoRepository);
        this.app.get(`${this.BASE_URL}/health`, validarLogin, healthController.getHealth.bind(healthController));
        this.app.post(`${this.BASE_URL}/login/:tipoUsuario`, authController.login.bind(authController))
        // endpoints consulta
        const consultaRepository = new ConsultaRepository(this.prisma);
        const consultaController = new ConsultaController(consultaRepository);
        this.app.post(`${this.BASE_URL}/solicitar-consulta`, consultaController.criarSolicitacaoConsulta.bind(consultaController))
        this.app.put(`${this.BASE_URL}/alterar-consulta/:consultaId`, consultaController.aceitarRecusarConsulta.bind(consultaController))
        this.app.get(`${this.BASE_URL}/solicitacoes-consulta`, consultaController.listarSolicitacoesConsulta.bind(consultaController))
        this.app.get(`${this.BASE_URL}/consultas`, consultaController.listarConsultas.bind(consultaController))
        // endpoints medicos
        const medicoController = new MedicoController(this.prisma);
        this.app.get(`${this.BASE_URL}/medicos`, medicoController.consultarPorCRM.bind(medicoController))
    }
}
