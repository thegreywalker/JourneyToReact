import React from 'react';
import Todos from './Components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript')
  ]

  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
