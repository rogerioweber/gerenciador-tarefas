const fs = require("node:fs");
const path = require("node:path");

const caminho = path.join(__dirname, "../database/tarefas.json");

function lerTarefas() {
  // Se o arquivo não existir, cria um vazio
  if (!fs.existsSync(caminho)) {
    fs.writeFileSync(caminho, "[]", "utf-8");
  }

  const dados = fs.readFileSync(caminho, "utf-8");

  return JSON.parse(dados);
}

function salvarTarefas(tarefas) {
  fs.writeFileSync(caminho, JSON.stringify(tarefas, null, 2));
}

module.exports = {
  lerTarefas,
  salvarTarefas,
};
