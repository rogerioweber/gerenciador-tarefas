const fs = require("node:fs");
const path = require("node:path");
const { select } = require("@clack/prompts");
const { adionarTarefa } = require("./controllers/adicionarTarefa");
const { listarTarefas } = require("./menus/listarTarefas");
const { menuTarefa } = require("./menus/menuTarefa");
const { alterarStatus } = require("./controllers/alterarStatus");
const { editarTarefa } = require("./controllers/editarTarefa");
const { deletarTarefa } = require("./controllers/deletarTarefa");

const caminho = path.join(__dirname, "database", "tarefas.json");

function criarBanco() {
  if (!fs.existsSync(caminho)) {
    fs.writeFileSync(caminho, "[]", "utf-8");
    console.log("Banco de dados criado.");
  }
}

async function gerenciador() {
  while (true) {
    const option = await select({
      message: "Escolha o que deseja fazer:",
      options: [
        { label: "Adicionar tarefa", value: "adicionar" },
        { label: "Listar tarefas", value: "listar" },
        { label: "Sair", value: "sair" },
      ],
    });

    switch (option) {
      case "adicionar":
        await adionarTarefa();
        break;

      case "listar":
        const id = await listarTarefas();

        if (!id) {
          break;
        }

        const acao = await menuTarefa();

        switch (acao) {
          case "status":
            await alterarStatus(id);
            break;

          case "editar":
            await editarTarefa(id);
            break;

          case "deletar":
            await deletarTarefa(id);
            break;

          case "voltar":
            break;
        }
        break;

      case "sair":
        console.log("Programa encerrado.");
        return;
    }
  }
}

criarBanco(); // Executa apenas uma vez

gerenciador();
