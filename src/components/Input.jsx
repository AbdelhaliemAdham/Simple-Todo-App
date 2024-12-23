import React from "react";

function Input({ inputRef, placeholder }) {
  return (
    <input
      className="my-1 px-1 mr-1 rounded-sm bg-yellow-50 text-grey py-1 "
      ref={inputRef}
      placeholder={placeholder}
    />
  );
}

export default Input;
