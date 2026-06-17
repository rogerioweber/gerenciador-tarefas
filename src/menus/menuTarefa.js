const { select } = require("@clack/prompts");

async function menuTarefa() {
  return await select({
    message: "O que deseja fazer?",
    options: [
      {
        value: "status",
        label: "Alterar status",
      },
      {
        value: "editar",
        label: "Editar tarefa",
      },
      {
        value: "deletar",
        label: "Excluir tarefa",
      },
      {
        value: "voltar",
        label: "Voltar",
      },
    ],
  });
}

module.exports = {
  menuTarefa,
};
