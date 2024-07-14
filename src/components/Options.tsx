"use client";

import React from "react";

export default function Options({
  onChange,
  label,
  optionsList,
  register,
}: {
  register: any;
  onChange?: (e: any) => void;
  label: string;
  optionsList: string[];
}) {
  return (
    <div>
      <label htmlFor="origin" className="block text-gray-300 mb-1">
        {label}
      </label>
      <select
        {...register(label)}
        id="origin"
        onChange={onChange}
        className="w-full bg-gray-700 text-white p-2 rounded"
      >
        {optionsList.map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
