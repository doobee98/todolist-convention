export default interface TodoItemModel {
  id: number;
  title: string;
  done: boolean;
  pinned: boolean;
}

export interface ChangeTodoItemProps {
  title?: string;
  done?: boolean;
  pinned?: boolean;
}
