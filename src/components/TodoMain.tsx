import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoApi from 'apis/TodoApi';
import { ChangeTodoItemProps } from 'models/TodoItemModel';
import TodoListModel from 'models/TodoListModel';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

const TodoMainBackground = styled.div`
  width: 600px;
  min-height: 400px;
  padding: 30px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const Loading = styled.div``;

const TodoMain: React.FC = () => {
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

  return (
    <TodoMainBackground>
      {!todoList ? (
        <Loading />
      ) : (
        <>
          <TodoHeader addNewTodo={addNewTodo} />
          <TodoList
            todos={todoList}
            changeTodo={changeTodo}
            deleteTodo={deleteTodo}
          />
        </>
      )}
    </TodoMainBackground>
  );
};

export default TodoMain;
