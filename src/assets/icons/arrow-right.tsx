import * as React from "react"

export function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={9}
      height={14}
      viewBox="0 0 9 14"
      fill="none"
      {...props}
    >
      <path d="M1 1l6 6-6 6" stroke={props.stroke} strokeWidth={2} />
    </svg>
  )
}
