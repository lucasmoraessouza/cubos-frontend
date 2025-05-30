import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Label(props: ComponentProps<"label">) {
  return (
    <label
      {...props}
      className={twMerge(
        "font-roboto font-bold text-[12.8px] text-mauve-dark-1200 tracking-normal mb-2",
        props.className
      )}
    />
  );
}
