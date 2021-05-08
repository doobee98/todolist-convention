import styled from 'styled-components';
import TodoItemModel from 'models/TodoItemModel';

const TodoItemWrapper = styled.div`
  border: 1px solid orange;
`;

const Content = styled.div`
  font-size: 15px;
`;

interface TodoItemProps {
  todo: TodoItemModel;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo } = props;

  return (
    <TodoItemWrapper>
      <Content>{todo.title}</Content>
    </TodoItemWrapper>
  );
};

export default TodoItem;
