const { select } = require("@clack/prompts");
const { lerTarefas, salvarTarefas } = require("../utils/tarefas");

async function alterarStatus(id) {
  const tarefas = lerTarefas();

  const tarefa = tarefas.find((t) => t.id === id);

  const novoStatus = await select({
    message: "Novo status:",
    options: [
      {
        value: "A fazer",
        label: "A fazer",
      },
      {
        value: "Fazendo",
        label: "Fazendo",
      },
      {
        value: "Concluída",
        label: "Concluída",
      },
    ],
  });

  tarefa.status = novoStatus;

  salvarTarefas(tarefas);

  console.log("Status alterado.");
}

module.exports = {
  alterarStatus,
};
