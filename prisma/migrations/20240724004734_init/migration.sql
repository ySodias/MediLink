/*
  Warnings:

  - You are about to drop the column `idMedico` on the `Consulta` table. All the data in the column will be lost.
  - You are about to drop the column `idPaciente` on the `Consulta` table. All the data in the column will be lost.
  - You are about to drop the column `idConsulta` on the `RequisicaoConsulta` table. All the data in the column will be lost.
  - You are about to drop the `HorarioAgendado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HorariosAtendimento` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idRequisicaoConsulta` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idAgendaMedico` to the `RequisicaoConsulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idMedico` to the `RequisicaoConsulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idPaciente` to the `RequisicaoConsulta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Consulta" DROP CONSTRAINT "Consulta_idMedico_fkey";

-- DropForeignKey
ALTER TABLE "Consulta" DROP CONSTRAINT "Consulta_idPaciente_fkey";

-- DropForeignKey
ALTER TABLE "HorarioAgendado" DROP CONSTRAINT "HorarioAgendado_idHorarioAtendimento_fkey";

-- DropForeignKey
ALTER TABLE "HorarioAgendado" DROP CONSTRAINT "HorarioAgendado_idRequisicaoConsulta_fkey";

-- DropForeignKey
ALTER TABLE "HorariosAtendimento" DROP CONSTRAINT "HorariosAtendimento_idMedico_fkey";

-- DropForeignKey
ALTER TABLE "RequisicaoConsulta" DROP CONSTRAINT "RequisicaoConsulta_idConsulta_fkey";

-- AlterTable
ALTER TABLE "Consulta" DROP COLUMN "idMedico",
DROP COLUMN "idPaciente",
ADD COLUMN     "idRequisicaoConsulta" INTEGER NOT NULL,
ADD COLUMN     "medicoId" INTEGER,
ADD COLUMN     "pacienteId" INTEGER;

-- AlterTable
ALTER TABLE "RequisicaoConsulta" DROP COLUMN "idConsulta",
ADD COLUMN     "idAgendaMedico" INTEGER NOT NULL,
ADD COLUMN     "idMedico" INTEGER NOT NULL,
ADD COLUMN     "idPaciente" INTEGER NOT NULL;

-- DropTable
DROP TABLE "HorarioAgendado";

-- DropTable
DROP TABLE "HorariosAtendimento";

-- CreateTable
CREATE TABLE "AgendaMedico" (
    "id" SERIAL NOT NULL,
    "idMedico" INTEGER NOT NULL,
    "horarioDisponivel" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "horarioSolicitado" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AgendaMedico_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_idRequisicaoConsulta_fkey" FOREIGN KEY ("idRequisicaoConsulta") REFERENCES "RequisicaoConsulta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "Medico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisicaoConsulta" ADD CONSTRAINT "RequisicaoConsulta_idAgendaMedico_fkey" FOREIGN KEY ("idAgendaMedico") REFERENCES "AgendaMedico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisicaoConsulta" ADD CONSTRAINT "RequisicaoConsulta_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisicaoConsulta" ADD CONSTRAINT "RequisicaoConsulta_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgendaMedico" ADD CONSTRAINT "AgendaMedico_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
