import './App.css';
import {useState} from 'react';
import Showtodolist from './Components/Showtodolis';
import Addnewtasks1 from './Components/addnewtasks1';

function App() {
  const [statenow, setstate] = useState('ShowTasks');
  return (
    <div className='appcomp'>
    <h1> Todolist</h1>
    <button
    onClick={()=>{setstate("showTasks");}}>
      Show Tasks</button>
    <button 
    onClick={()=>{setstate("addnewTask");}}>
      Add new task in todo list
      </button>
      {statenow=='showTasks' && <Showtodolist />}
      {statenow=='addnewTask' && <Addnewtasks1 />}
      </div >
  )
}
export default App;