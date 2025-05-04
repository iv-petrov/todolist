import { useState } from 'react';
import './App.css';
import ToDoList from './Components/ToDoList';

function App() {
  const [todos, setTodos] = useState([])
  const [taskName, setTask] = useState("")

  function addTask(e) {
    e.preventDefault();
    setTodos([...todos,taskName]);
    setTask('');
  }
  function deleteTask(index) {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Список дел</h1>
      </header>
      <div>
        <form className="list-form" onClick={(e) => e.preventDefault()}>
          <ul className="dotted-list">
            {todos.map((item,index) => (
              <ToDoList index={index} name={item} onClick={() => deleteTask(index)} />
            ))}
          </ul>
        </form>
        <form className="reg-form">
          <input type="text" value={taskName} onChange={(e) => setTask(e.target.value)} />
          <button className="add-button" onClick={addTask}>Добавить задачу</button>
        </form>
      </div>
    </div>
  );
}

export default App;
