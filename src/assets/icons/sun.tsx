import * as React from "react"

export function Sun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <circle cx={12} cy={12} r={4} fill="#EEEEF0" />
      <path
        d="M12 5V3M12 21v-2M16.95 7.05l1.414-1.414M5.636 18.364L7.05 16.95M19 12h2M3 12h2M16.95 16.95l1.414 1.414M5.636 5.636L7.05 7.05"
        stroke="#F1DDFF"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}
