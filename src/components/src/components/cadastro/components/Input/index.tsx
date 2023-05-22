import React from "react";
import Label from "../Label";

type IProps = {
  label: string;
  propsInput: React.InputHTMLAttributes<HTMLInputElement>;
};

const Input: React.FC<IProps> = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <Label label={props.label} />
      <input
        id={props.label}
        type="text"
        className={`block p-2 w-full h-10 border-sky-800 border-2 rounded-md 
        ${
          props.propsInput.disabled
            ? "bg-gray-200 text-gray-500 pointer-events-none select-none"
            : "bg-white cursor-pointer hover:border-sky-600"
        } transition-all duration-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700`}
        {...props.propsInput}
      />
    </div>
  );
};

export default Input;
