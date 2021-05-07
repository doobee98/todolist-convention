import styled from 'styled-components';

const TodoItemWrapper = styled.div`
  border: 1px solid orange;
`;

const Content = styled.div`
  font-size: 15px;
`;

interface TodoItemProps {
  data: number;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { data: item } = props;

  return (
    <TodoItemWrapper>
      <Content>{item}</Content>
    </TodoItemWrapper>
  );
};

export default TodoItem;
