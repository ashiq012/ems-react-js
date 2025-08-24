import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

function AllTask() {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 w-full">
      {/* Header Row */}
      <div
        className="hidden sm:flex mb-2 py-3 px-6 text-white justify-between rounded
        bg-emerald-500 text-lg sm:text-2xl font-semibold"
      >
        <h2 className="flex-1">Employee Name</h2>
        <h3 className="flex-1 text-center">New Task</h3>
        <h3 className="flex-1 text-center">Active Task</h3>
        <h3 className="flex-1 text-center">Completed</h3>
        <h3 className="flex-1 text-center">Failed</h3>
      </div>

      {/* Data Rows */}
      <div className="h-[79%] overflow-auto space-y-2">
        {userData.map((e) => (
          <div
            key={e.id}
            className="flex flex-col sm:flex-row text-white rounded text-base sm:text-xl 
            border border-white p-4 sm:p-3 gap-2 sm:gap-0
            transform transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* Mobile stacked view */}
            <div className="sm:flex-1">
              <h2 className="font-semibold">{e.firstName}</h2>
            </div>
            <div className="sm:flex-1 text-blue-400 text-center">
              <span className="sm:hidden font-semibold">New Task: </span>
              {e.taskCounts.newTask}
            </div>
            <div className="sm:flex-1 text-yellow-400 text-center">
              <span className="sm:hidden font-semibold">Active: </span>
              {e.taskCounts.active}
            </div>
            <div className="sm:flex-1 text-green-400 text-center">
              <span className="sm:hidden font-semibold">Completed: </span>
              {e.taskCounts.completed}
            </div>
            <div className="sm:flex-1 text-red-400 text-center">
              <span className="sm:hidden font-semibold">Failed: </span>
              {e.taskCounts.failed}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTask;
