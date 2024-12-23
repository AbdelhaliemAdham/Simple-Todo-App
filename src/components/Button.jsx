import React from "react";

function Button({ handleAddTask, children }) {
  const cssClass =
    "bg-third rounded-sm text-white font-serif font-bold px-2 py-1 text-sm flex-1 hover:bg-secondary";
  return (
    <button className={cssClass} onClick={handleAddTask}>
      {children}
    </button>
  );
}

export default Button;
