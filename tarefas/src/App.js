import './App.css';

import { useState, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarckCheckFill } from 'react-icons/bs';

const API = 'http://localhost:5000';

function App() {

  const [title, setTitle] = useState(""); // titulo (começa com string vazia)
  const [time, setTime] = useState(""); // duração da tarefa
  const [tarefas, setTarefas] = useState([]); // array de tarefas (começa com uma lista fazia)
  const [loading, setLoading] = useState(false); // msg para mostrar que os dados estão sendo carregados


  // LOAD TAREFAS ON PAGE LOAD
  useEffect(() => {

    const loadData = async() => {
      setLoading(true)

      const res = await fetch(API + "/tarefas")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

      setLoading(false);

      setTarefas(res);
    };

    loadData();

  },[])

  // para o recarregamento da página após o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    const tarefa = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    await fetch(API + "/tarefas", {
      method: "POST",
      body: JSON.stringify(tarefa),
      headers: {
        "Content-Type": "application/json",
      },

    });

    // adiciona automaticamente um elemento no aray, sem precisar recarregar a pag
    setTarefas((prevState) => [...prevState, tarefa]);

    console.log(tarefa);
    setTitle("");
    setTime("");

  };

  return (
    <div className="App">

      <div className='tarefas-header'>
        <h1>React Tarefas</h1>
      </div>

      <div className='form-tarefas'>
        <h2>Nova tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='title'>O que você vai fazer?</label>
            <input
              type='text'
              name='title'
              placeholder='Título da tarefa'
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
            />
          </div>

          <div className='form-control'>
            <label htmlFor='time'>Duração:</label>
            <input
              type='text'
              name='time'
              placeholder='Tempo estimado (horas)'
              onChange={(e) => setTime(e.target.value)}
              value={time || ""}
              required
            />
          </div>
          <input type='submit' value='Criar tarefa' />
        </form>
      </div>

      <div className='list-tarefas'>
        <h2>Lista de tarefas:</h2>
        {tarefas.length === 0 && <p>Não há tarefas</p>}
        {tarefas.map((tarefa) => (
          <div className='tarefa' key={tarefa.id}>
            <p>{tarefa.title}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
