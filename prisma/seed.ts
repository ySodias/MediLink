/* eslint-disable */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

    const usuario1 = await prisma.usuario.upsert({
        where: { id: 1 },
        update: {},
        create: {
            email: 'joao.silva@example.com',
            nome: 'Joao Silva',
            senha: '1234',
        },
    });

    const usuario2 = await prisma.usuario.upsert({
        where: { id: 2 },
        update: {},
        create: {
            email: 'pedro.silva@example.com',
            nome: 'Pedro Silva',
            senha: '1234',
        },
    });

    const usuario3 = await prisma.usuario.upsert({
        where: { id: 3 },
        update: {},
        create: {
            email: 'alexandre.teixeira@example.com',
            nome: 'Alexandre Teixeira',
            senha: '1234',
        },
    });

    const especialidade1 = await prisma.especialidadeMedica.upsert({
        where: { id: 1 },
        update: {},
        create: {
            nomeEspecialidade: 'Cardiologista',
        },
    });

    const especialidade2 = await prisma.especialidadeMedica.upsert({
        where: { id: 2 },
        update: {},
        create: {
            nomeEspecialidade: 'Otorrinolaringologia',
        },
    });

    const especialidade3 = await prisma.especialidadeMedica.upsert({
        where: { id: 3 },
        update: {},
        create: {
            nomeEspecialidade: 'Psiquiatra',
        },
    });

    const medico1 = await prisma.medico.upsert({
        where: { id: 1 },
        update: {},
        create: {
            idUsuario: 1,
            idEspecialidadeMedica: 1,
            crm: '1234',
        },
    });

    const medico2 = await prisma.medico.upsert({
        where: { id: 3 },
        update: {},
        create: {
            idUsuario: 3,
            idEspecialidadeMedica: 3,
            crm: '1235',
        },
    });

    const paciente1 = await prisma.paciente.upsert({
        where: { id: 2 },
        update: {},
        create: {
            idUsuario: 2,
            cpf: '101.059.600-47',
        },
    });

    console.log('Seed data upserted.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });