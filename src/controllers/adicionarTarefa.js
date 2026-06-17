const { text } = require("@clack/prompts");
const { lerTarefas, salvarTarefas } = require("../utils/tarefas");

async function adionarTarefa() {
  const texto = await text({
    message: "Digite a tarefa:",
  });

  const tarefas = lerTarefas();

  // verifica se já existe
  const existe = tarefas.some(
    (tarefa) => tarefa.texto.toLowerCase() === texto.toLowerCase(),
  );

  if (existe) {
    console.log("Essa tarefa já existe.");
    return;
  }

  const novaTarefa = {
    id: tarefas.length + 1,
    texto,
    status: "A fazer",
  };

  tarefas.push(novaTarefa);

  salvarTarefas(tarefas);

  console.log("Tarefa adicionada com sucesso!");
}

module.exports = {
  adionarTarefa,
};
