import TodoListModel from 'models/TodoListModel';
import styled from 'styled-components';
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

  return (
    <TodoListWrapper>
      <Title>TodoList</Title>
      {todos.items.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
