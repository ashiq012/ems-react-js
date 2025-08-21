import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'

function TaskList({loggedInUserData}) {
  return (
    <div id="TaskList" className=' h-[55%] justify-start items-center mt-10 gap-6 flex flex-nowrap overflow-x-auto '>
      {
      loggedInUserData.tasks.map((e) => {
        if(e.active){
          return <AcceptTask loggedInUserData ={e}/>
        }
        else if(e.newTask){
          return <NewTask loggedInUserData ={e}/>
        }
        else if(e.completed){
          return <CompleteTask loggedInUserData ={e}/>
        }
        else if(e.failed){
          return <FailedTask loggedInUserData ={e}/>
        } 
      })
      }
    </div>
  )
}

export default TaskList