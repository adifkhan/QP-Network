import React from "react";

export default function TextInput({ name, label, type, placeholder, register, errors }) {
  return (
    <div className="flex flex-col text-neutral">
      <label className="text-sm font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { required: `${name} is required` })}
        className="input input-bordered w-full h-10 bg-transparent border-2 border-[#64748B] rounded-md"
      />
      <span className="text-error text-xs font-medium h-3">{errors?.message}</span>
    </div>
  );
}
