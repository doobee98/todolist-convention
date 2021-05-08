import styled from 'styled-components';
import TodoNewInput from './TodoNewInput';

const TodoHeaderWrapper = styled.div`
  border: 2px solid red;
`;

interface TodoHeaderProps {
  addNewTodo: (title: string) => void;
}

const TodoHeader: React.FC<TodoHeaderProps> = (props) => {
  const { addNewTodo } = props;

  return (
    <TodoHeaderWrapper>
      <TodoNewInput addNewTodo={addNewTodo} />
    </TodoHeaderWrapper>
  );
};

export default TodoHeader;
