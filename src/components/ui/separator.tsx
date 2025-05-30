import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Separator(props: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={twMerge("h-px bg-[#F1E6FD]/19 z-2", props.className)}
    />
  );
}
