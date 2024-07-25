-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EspecialidadeMedica" (
    "id" SERIAL NOT NULL,
    "nomeEspecialidade" TEXT NOT NULL,

    CONSTRAINT "EspecialidadeMedica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medico" (
    "id" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idEspecialidadeMedica" INTEGER NOT NULL,
    "crm" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prontuario" (
    "id" SERIAL NOT NULL,
    "idMedico" INTEGER NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Prontuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArquivosProntuario" (
    "id" SERIAL NOT NULL,
    "idProntuario" INTEGER NOT NULL,
    "idEspecialidadeMedica" INTEGER NOT NULL,
    "linkS3" TEXT NOT NULL,
    "tipoArquivo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArquivosProntuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcessoProntuario" (
    "id" SERIAL NOT NULL,
    "idProntuario" INTEGER NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "idMedicoLiberado" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AcessoProntuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" SERIAL NOT NULL,
    "idRequisicaoConsulta" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pacienteId" INTEGER,
    "medicoId" INTEGER,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequisicaoConsulta" (
    "id" SERIAL NOT NULL,
    "idAgendaMedico" INTEGER NOT NULL,
    "aceito" BOOLEAN NOT NULL,
    "idMedico" INTEGER NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RequisicaoConsulta_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Telemedicina" (
    "id" SERIAL NOT NULL,
    "idConsulta" INTEGER NOT NULL,
    "linkChamada" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Telemedicina_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_cpf_key" ON "Paciente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_crm_key" ON "Medico"("crm");

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico" ADD CONSTRAINT "Medico_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico" ADD CONSTRAINT "Medico_idEspecialidadeMedica_fkey" FOREIGN KEY ("idEspecialidadeMedica") REFERENCES "EspecialidadeMedica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prontuario" ADD CONSTRAINT "Prontuario_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prontuario" ADD CONSTRAINT "Prontuario_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArquivosProntuario" ADD CONSTRAINT "ArquivosProntuario_idEspecialidadeMedica_fkey" FOREIGN KEY ("idEspecialidadeMedica") REFERENCES "EspecialidadeMedica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArquivosProntuario" ADD CONSTRAINT "ArquivosProntuario_idProntuario_fkey" FOREIGN KEY ("idProntuario") REFERENCES "Prontuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcessoProntuario" ADD CONSTRAINT "AcessoProntuario_idProntuario_fkey" FOREIGN KEY ("idProntuario") REFERENCES "Prontuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcessoProntuario" ADD CONSTRAINT "AcessoProntuario_idMedicoLiberado_fkey" FOREIGN KEY ("idMedicoLiberado") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcessoProntuario" ADD CONSTRAINT "AcessoProntuario_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "Telemedicina" ADD CONSTRAINT "Telemedicina_idConsulta_fkey" FOREIGN KEY ("idConsulta") REFERENCES "Consulta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
