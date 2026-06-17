# 📋 Gerenciador de Tarefas

Um gerenciador de tarefas desenvolvido em **Node.js** para execução no terminal. O projeto permite criar, listar, editar, alterar o status e remover tarefas, utilizando um arquivo JSON como banco de dados.

## 🚀 Funcionalidades

- ✅ Adicionar uma nova tarefa
- 📄 Listar todas as tarefas
- ✏️ Editar o nome de uma tarefa
- 🔄 Alterar o status de uma tarefa
  - A fazer
  - Fazendo
  - Concluída
- 🗑️ Excluir uma tarefa
- ✔️ Validação para impedir tarefas com nomes duplicados (ignorando letras maiúsculas e minúsculas)
- 💾 Persistência dos dados em arquivo JSON
- 🏗️ Criação automática do banco de dados caso não exista

---

## 🛠️ Tecnologias utilizadas

- Node.js
- JavaScript
- @clack/prompts
- File System (fs)

---

## 📁 Estrutura do projeto

```
src/
├── controllers/
│   ├── adicionarTarefa.js
│   ├── alterarStatus.js
│   ├── deletarTarefa.js
│   ├── editarTarefa.js
│   ├── listarTarefas.js
│   └── menuTarefa.js
│
├── database/
│   └── tarefas.json
│
├── utils/
│   └── tarefas.js
│
└── index.js
```

---

## ⚙️ Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/rogerioweber/gerenciador-tarefas.git
```

### 2. Acesse a pasta

```bash
cd gerenciador-tarefas
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm start
```

---

## 📌 Fluxo do programa

Ao iniciar, o programa:

1. Verifica se o banco de dados (`tarefas.json`) existe.
2. Caso não exista, cria automaticamente um arquivo vazio.
3. Exibe o menu principal.

### Menu principal

```
Adicionar tarefa
Listar tarefas
Sair
```

Ao selecionar uma tarefa, é possível:

- Alterar status
- Editar tarefa
- Excluir tarefa
- Voltar ao menu principal

---

## 💾 Banco de dados

As tarefas são armazenadas no arquivo:

```
src/database/tarefas.json
```

Exemplo:

```json
[
  {
    "id": 1,
    "texto": "Estudar Node.js",
    "status": "Fazendo"
  },
  {
    "id": 2,
    "texto": "Treinar",
    "status": "Concluída"
  }
]
```

---

## 📖 Aprendizados

Este projeto foi desenvolvido com o objetivo de praticar conceitos como:

- Organização de projetos em Node.js
- Modularização de código
- Manipulação de arquivos com `fs`
- Programação assíncrona (`async/await`)
- Estruturas de repetição
- Estruturas condicionais
- Manipulação de arrays (`find`, `some`, `filter`, `map`)
- Validação de dados
- Separação de responsabilidades entre arquivos

---

## 👨‍💻 Autor

Desenvolvido por **Rogerio Weber**.
