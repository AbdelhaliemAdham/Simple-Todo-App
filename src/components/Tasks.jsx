import React from "react";

function Tasks({ tasks = [], isEmpty, clearTask, checkTask }) {
  function handleCheckBox(index, isChecked) {
    checkTask(index, isChecked);
  }

  return (
    <>
      {isEmpty ? (
        <p className="font-bold font-serif text-l mb-2 text-white text-center">
          No Tasks added yet!
        </p>
      ) : (
        <ul>
          {tasks.map((item, index) => (
            <li
              className="bg-secondary text-white rounded-sm my-1 px-2 py-1 text-sm flex justify-between items-center"
              key={index}
            >
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={(e) => handleCheckBox(index, e.target.checked)}
              />
              <span className={item.isCompleted ? "line-through" : ""}>
                {item.task}
              </span>
              <button
                className="ml-2 font-bold text-white rounded px-2 py-1"
                onClick={() => clearTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Tasks;
