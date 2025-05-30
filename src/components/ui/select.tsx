import type { SelectHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ArrowDown } from "../../assets/icons/arrow-down";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  className?: string;
  multiple?: boolean;
}

export function Select({
  className = "",
  children,
  multiple,
  ...props
}: SelectProps) {
  return (
    <div className="relative">
      <select
        className={twMerge(
          "appearance-none bg-mauve-dark-300 border rounded border-mauve-dark-600 p-3 w-full font-roboto font-normal text-[16px] text-mauve-dark-1200 focus-within:border-purple-dark-900 focus-within:outline-none",
          multiple ? "h-[120px]" : "h-[52px] pr-10",
          className
        )}
        multiple={multiple}
        {...props}
      >
        {children}
      </select>
      {!multiple && (
        <ArrowDown
          className="absolute right-4 top-1/2 -translate-y-1/2 text-mauve-dark-1200"
          width={14}
          height={9}
          fill="#B5B2BC"
        />
      )}
    </div>
  );
}
