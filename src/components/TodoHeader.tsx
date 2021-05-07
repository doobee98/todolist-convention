import styled from 'styled-components';
import TodoNewInput from './TodoNewInput';

const TodoHeaderWrapper = styled.div`
  border: 2px solid red;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const TodoHeader: React.FC = () => {
  return (
    <TodoHeaderWrapper>
      <Title>TodoHeader</Title>
      <TodoNewInput />
    </TodoHeaderWrapper>
  );
};

export default TodoHeader;
