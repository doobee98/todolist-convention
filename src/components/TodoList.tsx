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
  data: number[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { data: todolist } = props;

  return (
    <TodoListWrapper>
      <Title>TodoList</Title>
      {todolist.map((todoitem) => (
        <TodoItem key={todoitem} data={todoitem} />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
