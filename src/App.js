import { useState } from 'react';
import './App.css';
import TodoList from './Components/ToDoList';

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
        <form className="list-form">
          <ul className="dotted-list">
            {todos.map((item,index) => (
              <li key={index}>
                <span className="number">{index+1}</span>
                <span className="text">{item}</span>
                <span className="dots"></span>
                <span><button onClick={() => deleteTask(index)}>Удалить</button></span>
              </li>
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
