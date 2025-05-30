
import * as React from "react"

export function Close(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke={props.stroke}
        strokeWidth={2}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  )
}
