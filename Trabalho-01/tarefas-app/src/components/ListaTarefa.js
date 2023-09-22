import React, { useState } from 'react';
import Tarefa from './Tarefa';
import './ListaTarefa.css';

function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState({ titulo: '', descricao: '' });

  const adicionarTarefa = () => {
    if (novaTarefa.titulo && novaTarefa.descricao) {
      setTarefas([...tarefas, { ...novaTarefa, concluida: false }]);
      setNovaTarefa({ titulo: '', descricao: '' });
    }
  };

  const editarTarefa = (index, novaInfo) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index] = novaInfo;
    setTarefas(novasTarefas);
  };

  const concluirTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = true;
    setTarefas(novasTarefas);
  };

  const desmarcarConcluida = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = false;
    setTarefas(novasTarefas);
  };

  const excluirTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  return (
    <div className="ListaTarefas">
      <h1>Lista de Tarefas</h1>
      <div className="NovaTarefa">
        <input
          type="text"
          value={novaTarefa.titulo}
          onChange={(e) => setNovaTarefa({ ...novaTarefa, titulo: e.target.value })}
          placeholder="Título"
        />
        <input
          type="text"
          value={novaTarefa.descricao}
          onChange={(e) => setNovaTarefa({ ...novaTarefa, descricao: e.target.value })}
          placeholder="Descrição"
        />
        <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      </div>
      {tarefas.map((tarefa, index) => (
        <Tarefa
          key={index}
          index={index}
          tarefa={tarefa}
          editarTarefa={editarTarefa}
          concluirTarefa={concluirTarefa}
          excluirTarefa={excluirTarefa}
          desmarcarConcluida={desmarcarConcluida}
        />
      ))}
    </div>
  );
}

export default ListaTarefas;
