// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  let [todolist, setTodolist] = useState([]);

  let saveToDoList = (event) => {

    let toname = event.target.toname.value;

    if (!todolist.includes(toname)) {
      let finalList = [...todolist, toname];
      setTodolist(finalList);
      event.target.toname.value = '';
    }

    else {
      alert("task name already Exisit...")
    }


    event.preventDefault();
  }

  let list = todolist.map((value, index) => {
    return (
      <ToDOListItems value={value} key={index} indexNum={index} todolist={todolist} setTodolist={setTodolist} />

    )
  })
  return (
    <div className="App">
      <h1>TODO List</h1>
      <form onSubmit={saveToDoList} >
        <input type='text' name='toname' placeholder='add new task' /> <button>Save</button>
      </form>

      <div className='outer-div'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function ToDOListItems({ value, indexNum, todolist, setTodolist }) {
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNum)
    setTodolist(finalData)
  }
  let [status, setstatus] = useState(false);
  let checkStatus = () => {
    setstatus(!status)
  }
  return (
    <li className={(status) ? 'activeStatus' : ''} onClick={checkStatus}>
      {indexNum + 1}.{value}
      <button className='delete-btn' onClick={deleteRow} >Delete</button>
    </li>
  )
}