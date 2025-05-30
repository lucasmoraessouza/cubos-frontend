import type { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Textarea = ({ 
  className = "", 
  ...props 
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    className={twMerge(
      "bg-mauve-dark-200 border rounded border-mauve-dark-600 p-4 w-full min-h-[80px] font-roboto font-normal text-[16px] text-mauve-dark-1200 focus-within:border-purple-dark-900 focus-within:outline-none caret-purple-dark-900",
      className
    )}
    {...props}
  />
); 