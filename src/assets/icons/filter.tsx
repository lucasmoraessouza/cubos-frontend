import * as React from "react"

export function Filter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M5 12V4M19 20v-2M5 20v-4M19 12V4M12 7V4M12 20v-8"
        stroke="#121113"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle
        cx={5}
        cy={14}
        r={2}
        stroke="#121113"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle
        cx={12}
        cy={9}
        r={2}
        stroke="#121113"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle
        cx={19}
        cy={15}
        r={2}
        stroke="#121113"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}