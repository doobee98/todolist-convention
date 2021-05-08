import styled from 'styled-components';
import TodoItemModel from 'models/TodoItemModel';
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';
import { FaRegCheckSquare, FaRegSquare } from 'react-icons/fa';

const TodoItemWrapper = styled.div`
  border: 1px solid orange;
`;

const Content = styled.span`
  font-size: 15px;
`;

interface TodoItemProps {
  todo: TodoItemModel;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo } = props;
  const { title, done, pinned } = todo;

  return (
    <TodoItemWrapper>
      {pinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
      {done ? <FaRegCheckSquare /> : <FaRegSquare />}
      <Content>{title}</Content>
    </TodoItemWrapper>
  );
};

export default TodoItem;
