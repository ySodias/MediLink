import { PrismaClient } from '@prisma/client';
import { Application } from 'express';
import { HealthController } from '@/controllers';
import PacienteRepository from './repositories/PacienteRepository';
import MedicoRepository from './repositories/MedicoRepository';
import { AuthGateway } from './gateways/AuthGateway';
import { AuthUseCase } from './useCases/AuthUseCase';
import AuthController from './controllers/Auth';
import { validarLogin } from './controllers/middleware/AuthMiddleware';
import AgendaMedicoRepository from './repositories/AgendaMedicoRepository';
import AgendaMedicoController from './controllers/AgendaMedicoController';


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
        this.app.get(`${this.BASE_URL}/health`, healthController.getHealth.bind(healthController));
        this.app.post(`${this.BASE_URL}/login/:tipoUsuario`, authController.login.bind(authController))
        
        // Rotas com Autenticacao

        // Agenda Medico
        const agendaMedicoRepository = new AgendaMedicoRepository(this.prisma);
        const agendaMedicoController = new AgendaMedicoController(agendaMedicoRepository, medicoRepository)
        this.app.get(`${this.BASE_URL}/agenda-medico/:crm`, validarLogin, agendaMedicoController.getAgendaMedico.bind(agendaMedicoController))
        this.app.post(`${this.BASE_URL}/agenda-medico`, validarLogin, agendaMedicoController.postAgendaMedico.bind(agendaMedicoController))
        this.app.put(`${this.BASE_URL}/agenda-medico/:id`, validarLogin, agendaMedicoController.putAgendaMedico.bind(agendaMedicoController))
    }
}
