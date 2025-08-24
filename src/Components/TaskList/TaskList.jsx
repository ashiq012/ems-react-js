import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'

function TaskList({loggedInUserData}) {
  return (
    <div id="TaskList" className=' h-[50%] justify-start items-center
    mt-10 gap-4 flex flex-wrap overflow-x-auto
    '>
      {
      loggedInUserData.tasks.map((e,index) => {
        if(e.active){
          return <AcceptTask key={index} loggedInUserData ={e}/>
        }
        else if(e.newTask){
          return <NewTask  key={index} loggedInUserData ={e}/>
        }
        else if(e.completed){
          return <CompleteTask  key={index} loggedInUserData ={e}/>
        }
        else if(e.failed){
          return <FailedTask  key={index} loggedInUserData ={e}/>
        } 
      })
      }
    </div>
  )
}

export default TaskList