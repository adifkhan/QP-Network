import React from "react";

export default function PhoneInput({ register, errors }) {
  return (
    <div className="flex flex-col text-neutral">
      <label className="text-sm font-semibold">Phone number</label>
      <label className="input input-bordered flex items-center gap-2 w-full h-10 bg-transparent border-2 border-[#64748B] rounded-md focus:outline-none">
        <select
          defaultValue="US"
          className=" w-14 min-h-10 h-10 max-w-xs bg-transparent focus:outline-none -mx-2"
          {...register("countryCode", { required: "Country Code is required" })}
        >
          <option value="US">US</option>
          {countryCode.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="grow focus:outline-none"
          placeholder="+1 (555) 000-0000"
          {...register("phone", {
            required: "phone number is required",
          })}
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M6.06004 6C6.21678 5.55444 6.52614 5.17873 6.93334 4.93942C7.34055 4.7001 7.8193 4.61262 8.28483 4.69247C8.75035 4.77232 9.17259 5.01434 9.47676 5.37568C9.78093 5.73702 9.94741 6.19434 9.94671 6.66666C9.94671 8 7.94671 8.66666 7.94671 8.66666M8.00004 11.3333H8.00671M14.6667 8C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8C1.33337 4.3181 4.31814 1.33333 8.00004 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z"
            stroke="#101828"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </label>
      <span className="text-error text-xs font-medium h-4">{errors?.message}</span>
    </div>
  );
}
const countryCode = ["EU", "BD", "PAK", "IN"];
