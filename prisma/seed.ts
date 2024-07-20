/* eslint-disable */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

    // Produtos
    const produto1 = await prisma.usuario.upsert({
        where: { id: 1 },
        update: {},
        create: {
            email: 'joao.silva@example.com',
            senha: '1234',
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