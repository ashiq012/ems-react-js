import React from 'react'

function CreateTask() {
  return (
    
         <div className='mt-10 p-5 rounded'>
            <form className='bg-[#1c1c1c] flex flex-wrap w-full items-start justify-between  ' >
                <div className=' w-1/2 text-xl p-20'>
                   <div>
                        <h3 className='text-md text-gray-300 mb-0.5'>Task Title</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='make a UI design'/>
                    </div>
                    <div>
                        <h3 className='text-md text-gray-300 mb-0.5'>Date</h3>
                        <input type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                    </div>
                    <div>
                        <h3 className='text-md text-gray-300 mb-0.5'>Assign To</h3>
                        <input type="text" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' placeholder='employee name' />
                    </div>
                    <div>
                      <h3 className='text-md text-gray-300 mb-0.5'>Category</h3>
                      <input type="text" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' placeholder='design , dev etc.'/>
                    </div>
                </div>
                <div className='flex w-2/5 flex-col items-start p-20'>    
                    <h3 className='text-xl text-green-300 mb-0.5'>Description</h3>
                    <textarea cols={30} rows={10} className='w-full h-44 text-sm py-2 px-4 rounded outline-none
                    bg-transparent border-[1px] border-gray-400'></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    
  )
}

export default CreateTask