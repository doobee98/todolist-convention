const sleep = (ms: number) => {
  return new Promise((f) => setTimeout(f, ms));
};

class TodoApi {
  fetchTodoList = async (onSuccess: (data: number[]) => void) => {
    await sleep(3000);

    const result: number[] = [1, 2, 3];
    onSuccess(result);
  };
}

export default TodoApi;
