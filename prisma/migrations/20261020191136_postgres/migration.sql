-- CreateTable
CREATE TABLE "Aluno" (
    "id" SERIAL NOT NULL,
    "matricula" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "curso" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cargaHoraria" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "nascimento" TIMESTAMP(3),
    "cpf" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" INTEGER,
    "endereco" TEXT,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AlunoTocurso" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AlunoTocurso_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_matricula_key" ON "Aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_cpf_key" ON "Aluno"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_telefone_key" ON "Aluno"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "curso_nome_key" ON "curso"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_email_key" ON "funcionario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_cpf_key" ON "funcionario"("cpf");

-- CreateIndex
CREATE INDEX "_AlunoTocurso_B_index" ON "_AlunoTocurso"("B");

-- AddForeignKey
ALTER TABLE "_AlunoTocurso" ADD CONSTRAINT "_AlunoTocurso_A_fkey" FOREIGN KEY ("A") REFERENCES "Aluno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlunoTocurso" ADD CONSTRAINT "_AlunoTocurso_B_fkey" FOREIGN KEY ("B") REFERENCES "curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;
