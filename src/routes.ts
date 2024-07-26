import { PrismaClient } from '@prisma/client';
import { Application } from 'express';
import { HealthController } from '@/controllers';
import PacienteRepository from './repositories/PacienteRepository';
import MedicoRepository from './repositories/MedicoRepository';
import AuthController from './controllers/Auth';
import { validarLogin } from './controllers/middleware/AuthMiddleware';
import ConsultaController from './controllers/Consulta';
import ConsultaRepository from './repositories/ConsultaRepository';
import MedicoController from './controllers/Medico';
import AgendaMedicoRepository from './repositories/AgendaMedicoRepository';
import AgendaMedicoController from './controllers/AgendaMedicoController';
import FiltrarMedicoController from './controllers/FiltrarMedicoController';
import { FiltrarMedicoRepository } from './repositories/FiltrarMedicoRepository';


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
        // endpoints consulta
        const consultaRepository = new ConsultaRepository(this.prisma);
        const consultaController = new ConsultaController(consultaRepository);

        this.app.post(`${this.BASE_URL}/solicitar-consulta`, validarLogin, consultaController.criarSolicitacaoConsulta.bind(consultaController))
        this.app.put(`${this.BASE_URL}/alterar-consulta/:consultaId`,validarLogin, consultaController.aceitarRecusarConsulta.bind(consultaController))
        this.app.get(`${this.BASE_URL}/solicitacoes-consulta`, validarLogin, consultaController.listarSolicitacoesConsulta.bind(consultaController))
        this.app.get(`${this.BASE_URL}/consultas`,validarLogin, consultaController.listarConsultas.bind(consultaController))

        // Agenda Medico
        const agendaMedicoRepository = new AgendaMedicoRepository(this.prisma);
        const agendaMedicoController = new AgendaMedicoController(agendaMedicoRepository, medicoRepository)
        this.app.get(`${this.BASE_URL}/agenda-medico/:crm`, validarLogin, agendaMedicoController.getAgendaMedico.bind(agendaMedicoController))
        this.app.post(`${this.BASE_URL}/agenda-medico`, validarLogin, agendaMedicoController.postAgendaMedico.bind(agendaMedicoController))
        this.app.put(`${this.BASE_URL}/agenda-medico/:id`, validarLogin, agendaMedicoController.putAgendaMedico.bind(agendaMedicoController))

        //Filtrar médicos
        const filtroMedicoRepository = new FiltrarMedicoRepository(this.prisma);
        const filtroMedicoController = new FiltrarMedicoController(filtroMedicoRepository)
        this.app.get(`${this.BASE_URL}/filtrar-medico/`, validarLogin, filtroMedicoController.getFiltrarMedicoAll.bind(filtroMedicoController))
        this.app.get(`${this.BASE_URL}/filtrar-medico/:crm`, validarLogin, filtroMedicoController.getFiltrarMedicoCrm.bind(filtroMedicoController))

    }
}
