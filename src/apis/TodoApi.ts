import TodoListModel from 'models/TodoListModel';

const sleep = (ms: number) => {
  return new Promise((f) => setTimeout(f, ms));
};

class TodoApi {
  fetchTodoList = async (onSuccess: (data: TodoListModel) => void) => {
    await sleep(3000);

    const todos: TodoListModel = {
      items: [
        {
          id: 0,
          title: '투두리스트 마무리하기',
          done: false,
          pinned: true,
        },
        {
          id: 1,
          title: '알프스 과제',
          done: false,
          pinned: false,
        },
        {
          id: 2,
          title: '콜로키움 과제 제출',
          done: true,
          pinned: false,
        },
        {
          id: 3,
          title: '밀린 강의 듣기',
          done: false,
          pinned: false,
        },
      ],
      counter: 4,
    };

    onSuccess(todos);
  };
}

export default TodoApi;
