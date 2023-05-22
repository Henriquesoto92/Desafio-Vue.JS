<!-- import React from "react";
import { OptionsProps } from "@/interface";
import Label from "../Label";

type IProps = {
  label: string;
  options: OptionsProps[] | undefined;
  propsSelect: React.SelectHTMLAttributes<HTMLSelectElement>;
};

const Select: React.FC<IProps> = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <Label label={props.label} />
      <select
        id={props.label}
        className={`block p-2 w-full h-10 border-sky-800 border-2 rounded-md 
        ${
          props.propsSelect.disabled
            ? "bg-gray-200 text-gray-500 pointer-events-none select-none"
            : "bg-white cursor-pointer hover:border-sky-600"
        } transition-all duration-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700`}
        {...props.propsSelect}
      >
        {props?.options?.map((option) => (
          <option value={option.id} key={`${option.label}${option.id}`}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select; -->
<script lang="ts">
</script>

<template>
  <div className="flex flex-col gap-1">
      <!-- <Label label={props.label} /> -->
      <select         id={props.label} 
        className={`block p-2 w-full h-10 border-sky-800 border-2 rounded-md 
        ${
          props.propsSelect.disabled
            ? "bg-gray-200 text-gray-500 pointer-events-none select-none"
            : "bg-white cursor-pointer hover:border-sky-600"
        } transition-all duration-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700`}
        {...props.propsSelect}
      >
        {props?.options?.map((option) => (
          <option value={option.id} key={`${option.label}${option.id}`}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
      
</template>

<style scoped>

</style>