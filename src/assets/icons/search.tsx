import * as React from "react"

export function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 18a7 7 0 100-14 7 7 0 000 14zm0-12a5 5 0 00-5 5 1 1 0 102 0 3 3 0 013-3 1 1 0 100-2z"
        fill={props.fill}
      />
      <path
        d="M20 20l-2-2"
        stroke={props.fill}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}
