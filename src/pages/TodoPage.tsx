import { useEffect, useState } from 'react';
import TodoApi from 'apis/TodoApi';
import TodoHeader from 'components/TodoHeader';
import TodoList from 'components/TodoList';
import TodoListModel from 'models/TodoListModel';
import { ChangeTodoItemProps } from 'models/TodoItemModel';

const TodoPage: React.FC = () => {
  const todoApi = new TodoApi();
  const [todoList, setTodoList] = useState<TodoListModel>();

  useEffect(() => {
    todoApi.fetchTodoList((todos) => {
      setTodoList(todos);
    });
  }, []);

  const addNewTodo = (title: string) => {
    if (!todoList) return;
    if (!title) return;

    const newTodo = {
      title,
      id: todoList.counter,
      done: false,
      pinned: false,
    };

    setTodoList({
      items: [...todoList.items, newTodo],
      counter: todoList.counter + 1,
    });
  };

  const deleteTodo = (id: number) => {
    if (!todoList) return;

    setTodoList({
      items: todoList.items.filter((todo) => todo.id !== id),
      counter: todoList.counter,
    });
  };

  const changeTodo = (id: number, newTodo: ChangeTodoItemProps) => {
    if (!todoList) return;

    setTodoList({
      items: todoList.items.map((todo) => ({
        ...todo,
        ...(todo.id === id && newTodo),
      })),
      counter: todoList.counter,
    });
  };

  if (!todoList) {
    return null;
  }

  return (
    <>
      <TodoHeader addNewTodo={addNewTodo} />
      <TodoList
        todos={todoList}
        changeTodo={changeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default TodoPage;
