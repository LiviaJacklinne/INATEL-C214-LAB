const Queue = require('../src/Queue'); // Importe a classe Queue

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue e dequeue funcionam corretamente', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
  });

  test('isEmpty deve retornar verdadeiro em uma fila vazia', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('size deve retornar o número correto de elementos na fila', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size()).toBe(3);
  });

  test('dequeue deve retornar "Fila vazia" em uma fila vazia', () => {
    expect(queue.dequeue()).toBe("Fila vazia");
  });
});
