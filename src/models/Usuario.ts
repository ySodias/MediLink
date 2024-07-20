import { PrismaClient } from '@prisma/client';

const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      email: 'joao.silva@example.com',
      senha: await bcrypt.hash('senha123', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'maria.oliveira@dominio.com',
      senha: await bcrypt.hash('senha123', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'carlos.santos@provedor.com',
      senha: await bcrypt.hash('senha123', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'ana.martins@empresa.com',
      senha: await bcrypt.hash('senha123', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'lucas.almeida@correio.com',
      senha: await bcrypt.hash('senha123', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  for (const user of users) {
    await prisma.usuario.create({
      data: user,
    });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
