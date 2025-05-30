import * as React from "react"

export function Download(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 14l-.354.354.354.353.354-.353L12 14zm.5-9a.5.5 0 00-1 0h1zM6.646 9.354l5 5 .708-.708-5-5-.708.708zm5.708 5l5-5-.708-.708-5 5 .708.708zM12.5 14V5h-1v9h1z"
        fill="#222"
      />
      <path d="M5 16v1a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="#222" />
    </svg>
  )
}
