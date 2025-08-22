import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider';

function CreateTask() {
    const data = useContext(AuthContext);
    const [formData , setformData] = useState({
        taskTitle : "",
        date : "",
        assignTo : "",
        category : "",
        description:""
    });

    const [showEmployeeList, setShowEmployeeList] = useState(false); // ✅ new state

    const handleChange =(e)=>{
        const {name , value} = e.target;
        setformData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Task created.");
        console.log(formData);
        setformData({
            taskTitle: "",
            date: "",
            assignTo: "",
            category: "",
            description: ""
        });
    };

    return (
        <div className='mt-10 p-5 rounded'>
            <form 
                autoComplete="off"   
                onSubmit={handleSubmit}
                className='bg-[#1c1c1c] flex flex-wrap w-full items-start justify-between ' 
            >
                <div className=' w-1/2 text-xl p-20'>
                    {/* Task Title */}
                    <div>
                        <h3 className='text-md text-gray-300 mb-0.5'>Task Title</h3>
                        <input 
                            name='taskTitle'
                            onChange={handleChange}
                            value={formData.taskTitle}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' 
                            type="text" 
                            placeholder='make a UI design'
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <h3 className='text-md text-gray-300 mb-0.5'>Date</h3>
                        <input 
                            type="date"
                            name='date'
                            onChange={handleChange}
                            value={formData.date}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' 
                        />
                    </div>

                    {/* Assign To */}
                    <div>
                        <h3 className='text-md text-gray-300 mb-0.5'>Assign To</h3>
                        <input 
                            type="text"
                            name='assignTo'
                            onChange={handleChange}
                            value={formData.assignTo}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' 
                            placeholder='employee name' 
                        />

                        {/* Toggle Button */}
                        <button 
                            type="button"
                            className='ml-2 bg-red-500 rounded-3xl font-semibold text-sm px-3 py-1'
                            onClick={() => setShowEmployeeList(prev => !prev)}
                        >
                            Employee List
                        </button>

                        {/* Conditional Employee List */}
                        {showEmployeeList && (
                            <div className='text-sm font-semibold border-2 w-44 px-3 py-1 mt-1 bg-green-800 rounded'>
                                {data.employee.map((e,index) => (
                                    <li
                                        key={index}
                                        className="cursor-pointer hover:bg-green-700  rounded"
                                        onClick={() => {
                                            setformData(prev => ({ ...prev, assignTo: e.firstName }));
                                            setShowEmployeeList(false); // close after selecting
                                        }}
                                    >
                                        {e.firstName}
                                    </li>
                                ))}  
                            </div>
                        )}
                    </div>

                
                    <div>
                        <h3 className='text-md text-gray-300 mb-0.5'>Category</h3>
                        <input 
                            type="text"
                            name='category'
                            onChange={handleChange}
                            value={formData.category}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' 
                            placeholder='design , dev etc.'
                        />
                    </div>
                </div>

        
                <div className='flex w-2/5 flex-col items-start p-20'>    
                    <h3 className='text-xl text-green-300 mb-0.5'>Description</h3>
                    <textarea 
                        name='description'
                        onChange={handleChange}
                        value={formData.description}
                        cols={30} 
                        rows={10} 
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                    ></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-xl font-semibold mt-4 w-full'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask;
