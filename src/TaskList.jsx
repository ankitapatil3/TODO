import { CiSquareCheck } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import "./TaskList.css";
import { useState } from "react";

function TaskList({task, setTask, setEdit, setActivity, setUpdate}){
    const [comp, setcomp]= useState(false);
    function handleremove(index){
        
        // clg(index);
  const ifilter=   
     task.filter((item)=>
      index!=item.id
    // console.log(item)
       )
 setTask(ifilter)
            // console.log("abc")
        };

        const handleedit= (id)=>{
      const finditem = task.find((element)=>{
        return    id===element.id;
      }

      );
      setActivity(finditem.title)
     setUpdate(false)
     setEdit(id)
        };
    const handleremoveAll= ()=>{
        setTask([])
    }

    const handlecomplete = (id)=>{
setTask(task.map((compitem)=>{
    if(compitem.id==id){
        return{ ...compitem,complete:!compitem.complete}
    }
    return compitem;
}))
    }
    return(
        <div className="tlmain">
<ul>
    {
        task.map((tasklist)=>(
            
            // <li className={"tla"`${tasklist.complete?"tlal":""}`} key={tasklist.id}> 
           <li className="tla"  key={tasklist.id}>  
            <div className="tldiv"> 
            {/* <span><CiSquareCheck size={30}  onClick={handlecomplete(tasklist.id)}/></span> */}
         <span><CiSquareCheck size={30}  /></span> 
            <span>{tasklist.title}</span>
            </div>
    
            <div className="tldiv">
                <span className="cp" ><FaEdit  size={30} onClick={()=>handleedit(tasklist.id)}/></span>
            <span className="cp">
    <MdDelete size={30} onClick={()=>handleremove(tasklist.id)}/></span>
            </div>
        </li>
        ))
    }
   



   
</ul>
{
    task.length>0 && <button className="btnblue" onClick={handleremoveAll}>Remove All</button>
}

        </div>
      
    )
}
export default TaskList;