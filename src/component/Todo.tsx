import React, { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
}

interface TodoProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newTitle: string, newDescription: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleDelete = (): void => {
    onDelete(todo.id);
  };

  const handleUpdate = (): void => {
    onUpdate(todo.id, newTitle, newDescription);
    setEditing(false);
  };

  return (
    <div className="flex flex-row border p-4 mb-4 bg-white rounded-md shadow-md">
      {!isEditing ? (
        <div className="flex-1">
          <h2 className="text-xl font-bold">{todo.title}</h2>
          <p className="text-gray-600 break-words">{todo.description}</p>
          {/* Add the "break-words" class to ensure that the text breaks between words */}
        </div>
      ) : (
        <div className="flex-1">
          <input
            type="text"
            value={newTitle}
            placeholder="Title"
            className="mb-2 border rounded-md p-2 w-full"
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            value={newDescription}
            placeholder="Description"
            className="border rounded-md p-2 w-full"
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>
      )}

      <div className="flex items-center justify-end">
        {!isEditing ? (
          <div className="flex space-x-2">
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded-md"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded-md"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="flex space-x-2">
            <button
              className="px-3 py-1 bg-green-500 text-white rounded-md"
              onClick={handleUpdate}
            >
              Save
            </button>
            <button
              className="px-3 py-1 bg-gray-500 text-white rounded-md"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
