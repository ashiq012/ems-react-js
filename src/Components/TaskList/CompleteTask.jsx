import React from 'react'

function CompleteTask({loggedInUserData}) {
  return (
<div className='flex-shrink-0 h-full w-[350px] p-5 bg-green-400 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 py-1 px-3 rounded-xl text-sm'>High</h3>
            <h2>{loggedInUserData.taskDate}</h2>
          </div>
          <h2 className='text-3xl font-semibold mt-15 '>{loggedInUserData.taskTitle}</h2>
          <p className='text-sm mt-2'>{loggedInUserData.taskDescription}</p>
          <div className='flex justify-center items-center mt-25'>
            <button className='bg-green-500 py-1 px-2 text-md font-bold rounded'>Completed</button>
          </div>
        </div>
      )
}

export default CompleteTask