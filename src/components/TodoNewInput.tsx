import styled from 'styled-components';

const TodoNewInputWrapper = styled.div`
  border: 1px solid blue;
`;

const Content = styled.div`
  font-size: 15px;
`;

const TodoNewInput: React.FC = () => {
  return (
    <TodoNewInputWrapper>
      <Content>TodoNewInput</Content>
    </TodoNewInputWrapper>
  );
};

export default TodoNewInput;
