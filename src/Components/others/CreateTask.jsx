import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider';

function CreateTask() {
  const [assignTo, setassignTo] = useState('');
  const [userData, setUserData] = useContext(AuthContext)
  const [formData, setformData] = useState({
    taskTitle: "",
    date: "",
    category: "",
    description: "",
    active: false,
    newTask: true,
    complete: false,
    failed: false
  });

  const [showEmployeeList, setShowEmployeeList] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData(prev => ({
      ...prev,
      [name]: value,
      active: false,
      newTask: true,
      complete: false,
      failed: false
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = userData;
    data.forEach((u) => {
      if (u.firstName === assignTo) {
        u.tasks.push(formData)
        u.taskCounts.newTask++;
      }
    })
    setUserData([...data])
    setformData({
      taskTitle: "",
      date: "",
      category: "",
      description: "",
      active: false,
      newTask: true,
      complete: false,
      failed: false
    });
  };

  return (
    <div className="mt-6 p-4 sm:p-6 md:p-10 rounded">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="bg-[#1c1c1c] flex flex-col md:flex-row w-full items-start justify-between gap-6"
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-base sm:text-lg p-4 sm:p-6 md:p-10 space-y-4">
          
          {/* Task Title */}
          <div>
            <h3 className="text-sm sm:text-md text-gray-300 mb-1">Task Title</h3>
            <input
              name="taskTitle"
              onChange={handleChange}
              value={formData.taskTitle}
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400"
              type="text"
              placeholder="make a UI design"
            />
          </div>

          {/* Date */}
          <div>
            <h3 className="text-sm sm:text-md text-gray-300 mb-1">Date</h3>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={formData.date}
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400"
            />
          </div>

          {/* Assign To */}
          <div>
            <h3 className="text-sm sm:text-md text-gray-300 mb-1">Assign To</h3>
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="assignTo"
                onChange={(e) => setassignTo(e.target.value)}
                value={assignTo}
                className="text-sm py-2 px-3 w-full sm:w-3/4 rounded outline-none bg-transparent border border-gray-400"
                placeholder="employee name"
              />

              <button
                type="button"
                className="bg-red-500 hover:bg-red-600 rounded-3xl font-semibold text-xs sm:text-sm px-3 py-1"
                onClick={() => setShowEmployeeList(prev => !prev)}
              >
                Employee List
              </button>
            </div>

            {/* Conditional Employee List */}
            {showEmployeeList && (
              <div className="text-sm font-semibold border w-full sm:w-44 px-3 py-2 mt-2 bg-green-800 rounded max-h-40 overflow-y-auto">
                {userData.map((u, index) => (
                  <li
                    key={index}
                    className="cursor-pointer py-1 hover:bg-green-700 rounded"
                    onClick={() => {
                      setassignTo(u.firstName);
                      setShowEmployeeList(false);
                    }}
                  >
                    {u.firstName}
                  </li>
                ))}
              </div>
            )}
          </div>

          {/* Category */}
          <div>
            <h3 className="text-sm sm:text-md text-gray-300 mb-1">Category</h3>
            <input
              type="text"
              name="category"
              onChange={handleChange}
              value={formData.category}
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400"
              placeholder="design, dev etc."
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex w-full md:w-2/5 flex-col items-start p-4 sm:p-6 md:p-10">
          <h3 className="text-lg sm:text-xl text-green-300 mb-2">Description</h3>
          <textarea
            name="description"
            onChange={handleChange}
            value={formData.description}
            rows={6}
            className="w-full text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-400 resize-none"
          ></textarea>
          <button className="bg-emerald-500 hover:bg-emerald-600 py-2 sm:py-3 rounded text-base sm:text-lg font-semibold mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
