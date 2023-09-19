// ListaTarefas.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import ListaTarefas from './ListaTarefas';

test('adiciona uma nova tarefa', () => {
  render(<ListaTarefas />);

  const tituloInput = screen.getByPlaceholderText('Título');
  const descricaoInput = screen.getByPlaceholderText('Descrição');
  const adicionarButton = screen.getByText('Adicionar Tarefa');

  fireEvent.change(tituloInput, { target: { value: 'Nova Tarefa' } });
  fireEvent.change(descricaoInput, { target: { value: 'Descrição da Nova Tarefa' } });

  fireEvent.click(adicionarButton);

  expect(screen.getByText('Nova Tarefa')).toBeInTheDocument();
  expect(screen.getByText('Descrição da Nova Tarefa')).toBeInTheDocument();
});
