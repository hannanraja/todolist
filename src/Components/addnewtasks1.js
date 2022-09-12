
import {setstate} from 'react';

var state = 0;
function Addnewtasks1(){
    
return(
    <div>
    <h1>Add new task</h1>

    <label> Todo task 
    <input type="text" id="task"/><p id="errt"></p></label><br />
    <label> On date 
    <input type="date" id ='date'/><p id="errd"></p></label><br />
    <button onClick={check}>
        Submit
    </button>
    <h4 id="confirm"></h4>
    </div>
)
}
function check(){
    const name= document.getElementById('task').value;
    const date= document.getElementById('date').value;
    const errt= document.getElementById('errt');
    const errd= document.getElementById('errd');
    const cnfrm= document.getElementById('confirm');

    if (!name){
errt.outerHTML = "please enter the task";
    }
    else{
        var person = [] ;
        person.push({
      Task: name,
      Date : date
        });       
        window.localStorage.setItem(state, JSON.stringify(person));
        state += 1;
        cnfrm.innerHTML = "Entry for name: " + name  + " is added successfully";
    
    }
}
export default Addnewtasks1;