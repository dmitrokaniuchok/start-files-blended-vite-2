import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import { useState } from 'react';
import TodoList from '../components/TodoList/TodoList';
import { nanoid } from 'nanoid';

export default function Todos() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Practice more' },
    { id: '2', text: 'Get all tasks done on time' },
  ]);

  const addNewTodo = text => {
    const newTodo = {
      id: nanoid(),
      text,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />

      {todos.length === 0 ? (
        <Text textAlign="center">There are no any todos ...</Text>
      ) : (
        <TodoList todos={todos} onDelete={deleteTodo} />
      )}
    </>
  );
}
