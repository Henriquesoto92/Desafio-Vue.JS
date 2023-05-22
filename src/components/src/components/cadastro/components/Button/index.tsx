import React from "react";

type IProps = {
  classProps: string;
  text: string;
  propsButton?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const Button: React.FC<IProps> = (props) => {
  return (
    <button
      className={`
      ${props.classProps} 
      py-2 px-4 h-fit w-fit border-2 border-gray-300 rounded-lg text-lg font-medium transition-all duration-300 
      ${
        props.propsButton?.disabled
          ? "hover:bg-gray-200 text-gray-400 bg-gray-200 pointer-events-none select-none"
          : "cursor-pointer text-white"
      }`}
      {...props.propsButton}
    >
      {props.text}
    </button>
  );
};

export default Button;
