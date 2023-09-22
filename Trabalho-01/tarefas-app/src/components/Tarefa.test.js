// Tarefa.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Tarefa from './Tarefa';

test('renderiza uma tarefa', () => {
  const tarefa = {
    titulo: 'Título da Tarefa',
    descricao: 'Descrição da Tarefa',
    concluida: false,
  };

  render(<Tarefa tarefa={tarefa} />);

  expect(screen.getByText('Título da Tarefa')).toBeInTheDocument();
  expect(screen.getByText('Descrição da Tarefa')).toBeInTheDocument();
});

test('edita uma tarefa', () => {
  const tarefa = {
    titulo: 'Título Original',
    descricao: 'Descrição Original',
    concluida: false,
  };

  render(<Tarefa tarefa={tarefa} />);

  const editarButton = screen.getByText('Editar');
  fireEvent.click(editarButton);

  const novoTituloInput = screen.getByPlaceholderText('Título');
  const novaDescricaoInput = screen.getByPlaceholderText('Descrição');
  const salvarButton = screen.getByText('Salvar');

  fireEvent.change(novoTituloInput, { target: { value: 'Título Editado' } });
  fireEvent.change(novaDescricaoInput, { target: { value: 'Descrição Editada' } });

  fireEvent.click(salvarButton);

  expect(screen.getByText('Título Editado')).toBeInTheDocument();
  expect(screen.getByText('Descrição Editada')).toBeInTheDocument();
});

test('conclui uma tarefa', () => {
  const tarefa = {
    titulo: 'Título da Tarefa',
    descricao: 'Descrição da Tarefa',
    concluida: false,
  };

  render(<Tarefa tarefa={tarefa} />);

  const concluirButton = screen.getByText('Concluir');
  fireEvent.click(concluirButton);

  expect(screen.getByText('Desmarcar como Concluída')).toBeInTheDocument();
});

test('exclui uma tarefa', () => {
  const tarefa = {
    titulo: 'Título da Tarefa',
    descricao: 'Descrição da Tarefa',
    concluida: false,
  };

  const mockExcluirTarefa = jest.fn();

  render(<Tarefa tarefa={tarefa} excluirTarefa={mockExcluirTarefa} />);

  const excluirButton = screen.getByText('Excluir');
  fireEvent.click(excluirButton);

  expect(mockExcluirTarefa).toHaveBeenCalledTimes(1);
});
