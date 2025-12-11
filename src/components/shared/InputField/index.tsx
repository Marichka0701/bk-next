"use client";

import { cn } from "@/src/lib/cn";
import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isRequired?: boolean;
  error?: FieldError;
}

export const InputField = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      isRequired = false,
      type = "text",
      placeholder = "",
      error,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="relative w-full">
        <label
          className={cn(
            "bg-secondary-background absolute -top-2 left-4 px-1 text-sm font-semibold",
            error ? "text-error-100" : "text-gray-900"
          )}
        >
          {label}
          {isRequired && <span className="text-error-100 ml-0.5">*</span>}
        </label>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={cn(
            "w-full p-4 text-base text-gray-900 placeholder:text-gray-600 border rounded-md outline-none transition-colors duration-300",
            error
              ? "border-error-100 focus:border-error-100"
              : "border-border focus:border-gray-900",
            className // så du kan overskrive/tilføje klasser udefra
          )}
          {...rest} // her ryger autoComplete, aria-*, onChange, osv. ned på <input>
        />
        {error && <p className="mt-1 text-sm text-error-100">{error.message}</p>}
      </div>
    );
  }
);

InputField.displayName = "InputField";
