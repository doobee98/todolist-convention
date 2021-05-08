import useInput from 'hooks/useInput';
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

const TodoNewInputWrapper = styled.div`
  border: 1px solid blue;
`;

const TitleInput = styled.input`
  width: 300px;
  display: inline-block;
`;

const IconWrapper = styled.span`
  svg {
    width: 20px;
    height: 20px;
  }
`;

interface TodoNewInputProps {
  addNewTodo: (title: string) => void;
}

const TodoNewInput: React.FC<TodoNewInputProps> = (props) => {
  const { addNewTodo } = props;
  const [title, onChangeTitle, setTitle] = useInput();

  const addTodo = () => {
    addNewTodo(title);
    setTitle('');
  };

  return (
    <TodoNewInputWrapper>
      <TitleInput
        placeholder="할 일을 입력해 주세요"
        value={title}
        onChange={onChangeTitle}
      />
      <IconWrapper onClick={addTodo}>
        <FaPlus />
      </IconWrapper>
    </TodoNewInputWrapper>
  );
};

export default TodoNewInput;
