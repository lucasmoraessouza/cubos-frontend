import * as React from "react"

export function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={9}
      height={14}
      viewBox="0 0 9 14"
      fill="none"
      {...props}
    >
      <path d="M8 1L2 7l6 6" stroke={props.stroke} strokeWidth={2} />
    </svg>
  )
}
