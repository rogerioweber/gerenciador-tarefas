const { confirm } = require("@clack/prompts");
const { lerTarefas, salvarTarefas } = require("../utils/tarefas");

async function deletarTarefa(id) {
  const confirmar = await confirm({
    message: "Deseja realmente excluir esta tarefa?",
  });

  if (!confirmar) {
    return;
  }

  const tarefas = lerTarefas();

  const novasTarefas = tarefas.filter((t) => t.id !== id);

  salvarTarefas(novasTarefas);

  console.log("Tarefa removida.");
}

module.exports = {
  deletarTarefa,
};
