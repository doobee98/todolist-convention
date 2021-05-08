import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItemModel, { ChangeTodoItemProps } from 'models/TodoItemModel';
import TodoListModel from 'models/TodoListModel';
import TodoItem from './TodoItem';

const TodoListWrapper = styled.div`
  margin: 10px 0;
`;

interface TodoListProps {
  todos: TodoListModel;
  changeTodo: (id: number, newTodo: ChangeTodoItemProps) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos, changeTodo, deleteTodo } = props;
  const [sortedItems, setSortedItems] = useState<TodoItemModel[]>([]);

  useEffect(() => {
    setSortedItems(
      todos.items.sort((a, b) => {
        // first: pinned, second: bigger id
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return b.id - a.id;
      }),
    );
  }, [todos]);

  return (
    <TodoListWrapper>
      {sortedItems.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodo={changeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
