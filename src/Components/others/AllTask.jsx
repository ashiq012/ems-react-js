import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

function AllTask() {
  const data = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 w-auto">
      <div
        className=" mb-1 py-2 px-10 flex text-white justify-between rounded
          border-none bg-emerald-500 text-2xl font-semibold"
      >
        <h2>Employee Name</h2>
        <h3>New Task</h3>
        <h3>Active Task</h3>
        <h3>Completed</h3>
        <h3>Failed</h3>
      </div>
      <div className="h-[79%] overflow-auto">
      {data.employee.map((e) => (
          <div
          key={e.id}
          className=" mb-1 py-2 px-12 flex text-white justify-evenly rounded text-2xl
          border-[2px] border-white transform transition-transform duration-500 hover:scale-101"
          >
          <h2 className="w-1/5 ">{e.firstName}</h2>
          <h3 className="w-1/5 pr-20 text-center text-blue-400">{e.taskCounts.newTask}</h3>
          <h3 className="w-1/5 pl-14 text-center text-yellow-400">{e.taskCounts.active}</h3>
          <h3 className="w-1/5 pl-50 text-center text-green-400">{e.taskCounts.completed}</h3>
          <h3 className="w-1/5 text-end text-red-400">{e.taskCounts.failed}</h3>
        </div>
      ))}
      </div>

    </div>
  );
}

export default AllTask;
