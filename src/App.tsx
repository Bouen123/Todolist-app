import React, { useState } from 'react';
import Todo from './component/Todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');

  const addTodo = (): void => {
    if (newTodoTitle.trim() !== '' && newTodoDescription.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: newTodoTitle,
          description: newTodoDescription,
        },
      ]);
      setNewTodoTitle('');
      setNewTodoDescription('');
    }
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: number, newTitle: string, newDescription: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle, description: newDescription } : todo
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTodoTitle}
          placeholder="Add a new todo title"
          className="border rounded-md p-2 w-full"
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <textarea
          value={newTodoDescription}
          placeholder="Add a new todo description"
          className="mt-2 border rounded-md p-2 w-full"
          onChange={(e) => setNewTodoDescription(e.target.value)}
        />
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
        onClick={addTodo}
      >
        Add
      </button>
      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
