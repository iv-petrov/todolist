import { useState } from 'react';
import './App.css';
import ToDoList from './Components/ToDoList';

function App() {
  const [todos, setTodos] = useState([])
  const [taskName, setTask] = useState("")

  function addTask(e) {
    e.preventDefault();
    if (taskName.length() === 0) {
      alert("Внимание! Не введено наименование задачи.");
    } else {
      setTodos([...todos,{name: taskName, status: false}]);
    }
    setTask("");
  };

  function deleteTask(index) {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };

  function strikeName(index) {
    const checkbox = document.getElementById("status"+index.toString());
    const itemname = document.getElementById("name"+index.toString());
    if (checkbox?.checked) {
      itemname.style.textDecoration = "line-through";
    } else if (itemname != null) {
      itemname.style.textDecoration = "none";
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Список дел</h1>
      </header>
      <div>
        <div className="list-form">
          <ul className="dotted-list">
            {todos.map((item, index) => (
              <ToDoList index={index} name={item.name} checked={item.status} onChange={() => strikeName(index)} onClick={() => deleteTask(index)} />
            ))}
          </ul>
        </div>
        <form className="reg-form">
          <input type="text" value={taskName} onChange={(e) => setTask(e.target.value)} />
          <button className="add-button" onClick={addTask}>Добавить задачу</button>
        </form>
      </div>
    </div>
  );
}

export default App;
