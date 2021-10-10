import { Stack, StackDivider } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';

import Todo from './Todo';

import { TodoType } from '@/types/TodoType';

type Props = {
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
};

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <Stack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
      {todos.map((todo, i) => (
        <Todo key={todo.id} index={i} title={todo.title} todos={todos} setTodos={setTodos} />
      ))}
    </Stack>
  );
};

export default TodoList;
