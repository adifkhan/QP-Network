import React from "react";

export default function SelectInput({ name, label, options, register, errors }) {
  return (
    <div className="flex flex-col text-neutral">
      <label className="text-sm font-semibold">{label}</label>
      <select
        defaultValue=""
        className="select w-full min-h-10 h-10 bg-transparent border-2 border-[#64748B] rounded-md capitalize focus:outline-none"
        {...register(name, { required: `${name} is required` })}
      >
        <option disabled value="">
          Choose {name}
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="text-error text-xs font-medium h-3">{errors?.message}</span>
    </div>
  );
}
