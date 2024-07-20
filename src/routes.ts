import { PrismaClient } from '@prisma/client';
import { Application } from 'express';
import { HealthController } from '@/controllers';

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
        this.app.get(`${this.BASE_URL}/health`, healthController.getHealth.bind(healthController));
    }
}
