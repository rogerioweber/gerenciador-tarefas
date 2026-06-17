const { select } = require("@clack/prompts");
const { lerTarefas } = require("../utils/tarefas");

async function listarTarefas() {
  const tarefas = lerTarefas();

  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa cadastrada.");
    return null;
  }

  const id = await select({
    message: "Escolha uma tarefa:",
    options: [
      ...tarefas.map((tarefa) => ({
        value: tarefa.id,
        label: tarefa.texto,
        hint: tarefa.status,
      })),
      {
        value: "voltar",
        label: "⬅ Voltar",
      },
    ],
  });

  if (id === "voltar") {
    return null;
  }

  return id;
}

module.exports = {
  listarTarefas,
};
