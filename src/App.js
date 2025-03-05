import React, { useState } from "react";
import "./App.css"; // Importa os estilos CSS

const App = () => {
  // Estado para armazenar a lista de tarefas
  const [tarefas, setTarefas] = useState([
    { text: "Learn Javascript", concluida: false },
    { text: "Read Clean Code", concluida: true },
    { text: "Create a personal project", concluida: false },
    { text: "Improve LinkedIn", concluida: false },
    { text: "Get a software job", concluida: false },
  ]);

  // Estado para armazenar o valor digitado no campo de input
  const [novaTarefa, setNovaTarefa] = useState("");

  // Função para adicionar uma nova tarefa
  const addTarefa = () => {
    if (novaTarefa.trim() === "") return; // Evita adicionar tarefas vazias
    setTarefas([...tarefas, { text: novaTarefa, concluida: false }]); // Adiciona nova tarefa ao array
    setNovaTarefa(""); // Limpa o campo de entrada após adicionar a tarefa
  };

  // Função para alternar entre concluída e não concluída
  const marcarTarefa = (index) => {
    const tarefasAtualizadas = [...tarefas]; // Cria uma cópia da lista de tarefas
    tarefasAtualizadas[index].concluida = !tarefasAtualizadas[index].concluida; // Inverte o status de concluída
    setTarefas(tarefasAtualizadas); // Atualiza o estado
  };

  // Função para remover uma tarefa
  const removerTarefa = (index) => {
    const tarefasAtualizadas = tarefas.filter((_, i) => i !== index); // Filtra a lista removendo a tarefa do índice correspondente
    setTarefas(tarefasAtualizadas); // Atualiza o estado com a nova lista sem a tarefa removida
  };

  return (
    <div className="container">
      {" "}
      {/* Contêiner principal */}
      <div className="todo-box">
        {" "}
        {/* Caixa branca centralizada */}
        <h2 className="title">To-do List</h2> {/* Título da lista */}
        {/* Campo de entrada e botão de adicionar */}
        <div className="input-container">
          <input
            type="text"
            className="input"
            placeholder="Add your task"
            value={novaTarefa} // Conecta o input ao estado
            onChange={(e) => setNovaTarefa(e.target.value)} // Atualiza o estado ao digitar
          />
          <button className="add-botao" onClick={addTarefa}>
            ADD
          </button>
        </div>
        {/* Lista de tarefas */}
        <ul className="task-list">
          {tarefas.map(
            (
              tarefa,
              index // Percorre a lista de tarefas e cria um item para cada uma
            ) => (
              <li
                key={index}
                className={`task-item ${tarefa.concluida ? "concluida" : ""}`}
              >
                {/* Checkbox para marcar a tarefa como concluída */}
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={tarefa.concluida} // Define o estado do checkbox
                  onChange={() => marcarTarefa(index)} // Alterna o status da tarefa ao clicar
                />

                {/* Texto da tarefa */}
                <span className="task-text">{tarefa.text}</span>

                {/* Botão de remover tarefa */}
                <button
                  className="button-delete"
                  onClick={() => removerTarefa(index)}
                >
                  🗑️
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
