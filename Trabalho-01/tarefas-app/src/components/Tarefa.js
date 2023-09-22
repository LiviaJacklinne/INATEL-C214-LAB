// Tarefa.js
import React, { useState } from 'react';
import './Tarefa.css';

function Tarefa({ index, tarefa, editarTarefa, concluirTarefa, excluirTarefa, desmarcarConcluida }) {
  const [editando, setEditando] = useState(false);
  const [novaInfo, setNovaInfo] = useState(tarefa);

  const salvarEdicao = () => {
    editarTarefa(index, novaInfo);
    setEditando(false);
  };

  return (
    <div className={`Tarefa ${tarefa.concluida ? 'concluida' : ''}`}>
      {editando ? (
        <div>
          <input
            type="text"
            value={novaInfo.titulo}
            onChange={(e) => setNovaInfo({ ...novaInfo, titulo: e.target.value })}
            placeholder="Título"
          />
          <input
            type="text"
            value={novaInfo.descricao}
            onChange={(e) => setNovaInfo({ ...novaInfo, descricao: e.target.value })}
            placeholder="Descrição"
          />
          <button onClick={salvarEdicao}>Salvar</button>
          <button onClick={() => setEditando(false)}>Cancelar</button>
        </div>
      ) : (
        <div>
          <h2>{tarefa.titulo}</h2>
          <p>{tarefa.descricao}</p>
          {tarefa.concluida ? (
            <button onClick={() => desmarcarConcluida(index)}>Desmarcar como Concluída</button>
          ) : (
            <button onClick={() => concluirTarefa(index)}>Concluir</button>
          )}
          <button onClick={() => setEditando(true)}>Editar</button>
          <button onClick={() => excluirTarefa(index)}>Excluir</button>
        </div>
      )}
    </div>
  );
}

export default Tarefa;
