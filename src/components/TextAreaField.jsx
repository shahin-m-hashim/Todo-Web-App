/* eslint-disable react/prop-types */

import { cn } from "../utils/cn";
import { forwardRef, useImperativeHandle, useState } from "react";

const TextAreaField = forwardRef(function TextAreaField(
  { name, validate, placeholder, defaultValue },
  ref
) {
  const [input, setInput] = useState({
    value: defaultValue || "",
    error: null,
  });

  const validateInput = () => {
    const error = validate(input.value);
    setInput((prev) => ({ ...prev, error }));
    return !error;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const error = validate(value);
    setInput({ value, error });
  };

  const reset = () => setInput({ value: defaultValue || "", error: null });
  const getValue = () => input.value;

  useImperativeHandle(ref, () => ({
    reset,
    getValue,
    validate: validateInput,
  }));
  return (
    <div className="mb-2">
      <textarea
        rows={3}
        id={name}
        name={name}
        value={input.value}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(
          "p-2 border-2 rounded-md w-full",
          input.error && "border-red-500"
        )}
      />
      {input.error && <p className="px-1 text-red-500">{input.error}</p>}
    </div>
  );
});

export default TextAreaField;
