import * as React from "react"

export function ArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={14}
      height={9}
      viewBox="0 0 14 9"
      fill="none"
      {...props}
    >
      <path d="M13 8L7 2 1 8" stroke="#121113" strokeWidth={2} />
    </svg>
  )
}
