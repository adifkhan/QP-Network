import React from "react";

export default function PasswordInput({ register, errors }) {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <div className="flex flex-col text-neutral">
      <label className="text-sm font-semibold">Password</label>
      <label className="input input-bordered flex items-center gap-2 w-full h-10 bg-transparent border-2 border-[#64748B] rounded-md focus:outline-none">
        <input
          type={showPass ? "text" : "password"}
          className="grow focus:outline-none"
          placeholder="Enter your password"
          {...register("password", {
            required: "password is required",
            maxLength: { value: 16, message: "max 16 characters" },
            minLength: { value: 6, message: "min 6 characters" },
          })}
        />
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          onClick={() => setShowPass(!showPass)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.1441 6.00002C2.52919 6.53112 3.31845 7.53186 4.35774 8.40316C5.43534 9.30658 6.69716 10 7.99995 10C9.30274 10 10.5646 9.30658 11.6422 8.40316C12.6814 7.53186 13.4707 6.53112 13.8558 6.00002C13.4707 5.46892 12.6814 4.46818 11.6422 3.59688C10.5646 2.69346 9.30273 2.00002 7.99995 2.00002C6.69716 2.00002 5.43534 2.69346 4.35774 3.59688C3.31845 4.46818 2.52919 5.46892 2.1441 6.00002ZM3.50113 2.57512C4.67561 1.59047 6.23747 0.666687 7.99995 0.666687C9.76242 0.666687 11.3243 1.59047 12.4988 2.57512C13.6846 3.56931 14.5621 4.69811 14.9675 5.26202C15.2864 5.7056 15.2864 6.29444 14.9675 6.73802C14.5621 7.30193 13.6846 8.43073 12.4988 9.42492C11.3243 10.4096 9.76242 11.3334 7.99995 11.3334C6.23747 11.3334 4.67561 10.4096 3.50113 9.42492C2.31525 8.43073 1.43782 7.30193 1.0324 6.73802C0.713485 6.29444 0.713485 5.7056 1.0324 5.26202C1.43782 4.69811 2.31525 3.56931 3.50113 2.57512Z"
            fill="#64748B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99995 7.33335C8.73633 7.33335 9.33328 6.7364 9.33328 6.00002C9.33328 5.26364 8.73633 4.66669 7.99995 4.66669C7.26357 4.66669 6.66661 5.26364 6.66661 6.00002C6.66661 6.7364 7.26357 7.33335 7.99995 7.33335ZM7.99995 8.66669C9.47271 8.66669 10.6666 7.47278 10.6666 6.00002C10.6666 4.52726 9.47271 3.33335 7.99995 3.33335C6.52719 3.33335 5.33328 4.52726 5.33328 6.00002C5.33328 7.47278 6.52719 8.66669 7.99995 8.66669Z"
            fill="#64748B"
          />
        </svg>
      </label>
      <span className="text-error text-xs font-medium h-4">{errors?.message}</span>
    </div>
  );
}
