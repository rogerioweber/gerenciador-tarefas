const { text } = require("@clack/prompts");
const { lerTarefas, salvarTarefas } = require("../utils/tarefas");

async function editarTarefa(id) {
  const tarefas = lerTarefas();

  const tarefa = tarefas.find((t) => t.id === id);

  const novoTexto = await text({
    message: "Novo texto:",
    initialValue: tarefa.texto,
  });

  tarefa.texto = novoTexto;

  salvarTarefas(tarefas);

  console.log("Tarefa atualizada.");
}

module.exports = {
  editarTarefa,
};
