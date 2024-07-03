import React from "react";

export default function DoBInput({ register, errors }) {
  return (
    <div className="flex flex-col text-neutral">
      <label className="text-sm font-semibold">Date of Birth</label>
      <div className="flex items-center gap-2">
        <select
          defaultValue=""
          className="select w-full min-h-10 h-10 max-w-xs bg-transparent border-2 border-[#64748B] rounded-md"
          {...register("bDate.date", { required: "Date is required" })}
        >
          <option disabled value="">
            MM
          </option>
          {month.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <select
          defaultValue=""
          className="select w-full min-h-10 h-10 max-w-xs bg-transparent border-2 border-[#64748B] rounded-md"
          {...register("bDate.month", { required: "Month is required" })}
        >
          <option disabled value="">
            DD
          </option>
          {date.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <select
          defaultValue=""
          className="select w-full min-h-10 h-10 max-w-xs bg-transparent border-2 border-[#64748B] rounded-md"
          {...register("bDate.year", { required: "Year is required" })}
        >
          <option disabled value="">
            YYYY
          </option>
          {year.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
      <span className="text-error text-xs font-medium h-3">{errors?.message}</span>
    </div>
  );
}

const date = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31,
];
const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const year = [
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
  2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
];
