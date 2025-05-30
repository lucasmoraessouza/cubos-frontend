import * as React from "react"

export function Upload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 5l-.354-.354.354-.353.354.353L12 5zm.5 9a.5.5 0 01-1 0h1zM6.646 9.646l5-5 .708.708-5 5-.708-.708zm5.708-5l5 5-.708.708-5-5 .708-.708zM12.5 5v9h-1V5h1z"
        fill={props.fill}
      />
      <path d="M5 16v1a2 2 0 002 2h10a2 2 0 002-2v-1" stroke={props.fill} />
    </svg>
  )
}
