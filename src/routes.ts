import { PrismaClient } from '@prisma/client';
import { Application } from 'express';
import { HealthController } from '@/controllers';
import PacienteRepository from './repositories/PacienteRepository';
import MedicoRepository from './repositories/MedicoRepository';
import { AuthGateway } from './gateways/AuthGateway';
import { AuthUseCase } from './useCases/AuthUseCase';
import AuthController from './controllers/Auth';

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
    }
}
