import PageTemplate from 'components/PageTemplate';
import styled from 'styled-components';
import TodoMain from 'components/TodoMain';

const TodoWrapper = styled.div`
  min-height: inherit;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

const TodoPage: React.FC = () => {
  return (
    <PageTemplate isResponsive>
      <TodoWrapper>
        <TodoMain />
      </TodoWrapper>
    </PageTemplate>
  );
};

export default TodoPage;
