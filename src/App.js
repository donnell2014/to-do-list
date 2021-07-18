import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [newToDo, setNewToDo] = useState("");
  const [todos, setToDos] = useState([]);

  const handleNewToDoSubmit = (event) => {
    event.preventDefault();

    if(newToDo.length == 0) {
      return;
    }

    const todoItem = {
      text: newToDo,
      complete: false
    }


    setToDos([...todos, todoItem]);
    setNewToDo("");
  };

  const handleToDoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i != delIdx;
    });
    
    setToDos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if(idx === i) {
        todo.complete = !todo.complete;
        // const updatedTodo = { ...todo, complete: !todo.complete };
        // return updatedTodo
      }


      return todo;
    });

    setToDos(updatedTodos);

  }
  return (
    <div className="App">
      <form onSubmit={(event) => {
        handleNewToDoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewToDo(event.target.value);
        }} type="text" value={newToDo}/>
        <div>
          <button>Add</button>
        </div>
      </form>

      {todos.map((todo, i) => {
        return (
          <div key="i">
            <input onChange={(event) => {
              handleToggleComplete(i);
            }} checked={todo.complete} type="checkbox"></input>
            <span>{todo.text}</span>
            <button onClick={(event) => {
              handleToDoDelete(i);
            }}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
