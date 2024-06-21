
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import './App.css'
import TaskList from './TaskList'

function App() {
   
  const [activity, setActivity]= useState("");
 
  const [task , setTask] = useState([]);
  const [update, setUpdate] =useState(true);
  const[edit, setEdit] = useState(null)

  const handleUpdate =()=>{
    if(activity===""){
      alert("please fill input box")
    }
    else if(!update){
      setTask(task.map((newElement)=>{
          if(newElement.id===edit){
            return {...newElement, title:activity};
          }
        return newElement; }
  
        ))

       
        setUpdate(true)
        setActivity("")
        setEdit(null)
    } else {
      const allActivity = {id:uuidv4(), title:activity, complete:false};
      // const allActivity = {id:uuidv4(), title:activity};
      console.log(allActivity);
  setTask([...task,allActivity]);
  setActivity("");
    }
   
  }

  return (
    <>
   <div className='containertodo'>
    <section className='containera'>
      
      <div className='todo'> 
        <h1 className='heading'>TODO LIST</h1>
        <div className='indiv'>
        <input type="text" name="" id="" className='incl' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        {update?  <button type="submit" className='btn btndiv' onClick={handleUpdate} >Add </button>: <button type="submit" className='btn btndiv' onClick={handleUpdate} >Update </button> }
      
        {/* {
          task.map((tasklist)=>(
            <div>
              <ul>
                <li>{tasklist}</li>
              </ul>
            </div>
          ))
        } */}
        <br />
        {/* {task} */}
        <TaskList task={task} setTask={setTask} setActivity={setActivity} setUpdate={setUpdate} setEdit={setEdit}/>
        </div>

      

      </div>
    </section>
   </div>
    </>
  )
}

export default App;
