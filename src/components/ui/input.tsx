import { forwardRef, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentProps<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        "bg-mauve-dark-200 border rounded border-mauve-dark-600 p-4 w-full h-11 font-roboto font-normal text-[16px] text-mauve-dark-1200 focus-within:border-purple-dark-900 focus-within:outline-none caret-purple-dark-900",
        props.className
      )}
    />
  );
});

Input.displayName = "Input";
