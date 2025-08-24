import React from 'react'

function TaskListNumbere({ loggedInUserData }) {
  return (
    <div className='flex flex-wrap justify-between gap-4 mt-10'>
      <div className='bg-blue-400 flex-1 min-w-[45%] sm:min-w-[22%] py-4 px-5 rounded-xl text-center'>
        <h2 className='text-2xl sm:text-4xl font-semibold'>{loggedInUserData.taskCounts.newTask}</h2>
        <h3 className='text-sm sm:text-lg font-medium'>New Task</h3>
      </div>

      <div className='bg-green-400 flex-1 min-w-[45%] sm:min-w-[22%] py-4 px-5 rounded-xl text-center'>
        <h2 className='text-2xl sm:text-4xl font-semibold'>{loggedInUserData.taskCounts.completed}</h2>
        <h3 className='text-sm sm:text-lg font-medium'>Completed</h3>
      </div>

      <div className='bg-yellow-400 flex-1 min-w-[45%] sm:min-w-[22%] py-4 px-5 rounded-xl text-center'>
        <h2 className='text-2xl sm:text-4xl font-semibold'>{loggedInUserData.taskCounts.active}</h2>
        <h3 className='text-sm sm:text-lg font-medium'>Active Task</h3>
      </div>

      <div className='bg-red-400 flex-1 min-w-[45%] sm:min-w-[22%] py-4 px-5 rounded-xl text-center'>
        <h2 className='text-2xl sm:text-4xl font-semibold'>{loggedInUserData.taskCounts.failed}</h2>
        <h3 className='text-sm sm:text-lg font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbere
