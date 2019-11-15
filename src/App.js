import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '클론 코딩해보기',
      checked: true,
    },
    {
      id: 2,
      text: '기업 지원하기',
      checked: true,
    },
    {
      id: 3,
      text: '알고리즘 풀기',
      checked: false,
    },
  ]);

  //고윳값으로 사용될 아이디
  //ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
