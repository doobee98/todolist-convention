import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItemModel from 'models/TodoItemModel';
import TodoListModel from 'models/TodoListModel';
import TodoItem from './TodoItem';

const TodoListWrapper = styled.div`
  border: 2px solid green;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

interface TodoListProps {
  todos: TodoListModel;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos } = props;
  const [sortedItems, setSortedItems] = useState<TodoItemModel[]>([]);

  useEffect(() => {
    setSortedItems(
      todos.items.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return 0;
      }),
    );
  }, []);

  return (
    <TodoListWrapper>
      <Title>TodoList</Title>
      {sortedItems.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
