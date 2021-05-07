import { useEffect, useState } from 'react';
import TodoApi from 'apis/TodoApi';
import TodoHeader from 'components/TodoHeader';
import TodoList from 'components/TodoList';

const TodoPage: React.FC = () => {
  const todoApi = new TodoApi();
  const [todoList, setTodoList] = useState<number[]>([]);

  useEffect(() => {
    todoApi.fetchTodoList((data) => {
      setTodoList(data);
    });
  }, []);

  return (
    <>
      <TodoHeader />
      <TodoList data={todoList} />
    </>
  );
};

export default TodoPage;
