import styled, { css } from 'styled-components';
import TodoItemModel, { ChangeTodoItemProps } from 'models/TodoItemModel';
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';
import { ImBin } from 'react-icons/im';
import { FaRegCheckSquare, FaRegSquare } from 'react-icons/fa';

const TodoItemWrapper = styled.div`
  border: 1px solid orange;
`;

const IconWrapper = styled.span`
  svg {
    width: 20px;
    height: 20px;
  }
`;

interface ContentProps {
  done?: boolean;
}

const Content = styled.span<ContentProps>`
  font-size: 15px;

  ${(props) =>
    props.done &&
    css`
      text-decoration: line-through;
    `}
`;

interface TodoItemProps {
  todo: TodoItemModel;
  changeTodo: (id: number, newTodo: ChangeTodoItemProps) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo, changeTodo, deleteTodo } = props;
  const { title, done, pinned } = todo;

  const toggleDone = () => {
    changeTodo(todo.id, { done: !todo.done });
  };

  const togglePinned = () => {
    changeTodo(todo.id, { pinned: !todo.pinned });
  };

  const deleteThis = () => {
    deleteTodo(todo.id);
  };

  return (
    <TodoItemWrapper>
      <IconWrapper onClick={togglePinned}>
        {pinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
      </IconWrapper>
      <IconWrapper onClick={toggleDone}>
        {done ? <FaRegCheckSquare /> : <FaRegSquare />}
      </IconWrapper>
      <Content done={done}>{title}</Content>
      <IconWrapper onClick={deleteThis}>
        <ImBin />
      </IconWrapper>
    </TodoItemWrapper>
  );
};

export default TodoItem;