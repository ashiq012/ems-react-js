import React from 'react'

function AcceptTask({loggedInUserData}) {
  return (
    
        <div className='p-5 sm:flex-shrink-0 h-full w-[350px] sm:p-5 bg-yellow-400 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-5 sm:py-1 sm:px-3 rounded-xl text-sm'>High</h3>
            <h2 className='text-sm sm:xl'>{loggedInUserData.taskDate}</h2>
          </div>
          <h2 className='text-3xl font-semibold sm:mt-15 mt-5'>{loggedInUserData.taskTitle}</h2>
          <p className='text-sm mt-2'>{loggedInUserData.taskDescription}</p>
          <div className='flex justify-between mt-10  md:mt-10 items-center '>
            <button className='bg-green-600 py-1 px-2 sm:text-md text-sm font-bold rounded'>Mark as completed</button>
            <button className='bg-red-500 py-1 px-2 sm:text-md text-sm font-bold rounded'>mark as failed</button>
          </div>
        </div>

  )
}

export default AcceptTask