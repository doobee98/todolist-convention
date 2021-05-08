import { useEffect, useState } from 'react';
import TodoApi from 'apis/TodoApi';
import TodoHeader from 'components/TodoHeader';
import TodoList from 'components/TodoList';
import TodoListModel from 'models/TodoListModel';

const TodoPage: React.FC = () => {
  const todoApi = new TodoApi();
  const [todoList, setTodoList] = useState<TodoListModel>();

  useEffect(() => {
    todoApi.fetchTodoList((todos) => {
      setTodoList(todos);
    });
  }, []);

  if (!todoList) {
    return null;
  }

  return (
    <>
      <TodoHeader />
      <TodoList todos={todoList} />
    </>
  );
};

export default TodoPage;
