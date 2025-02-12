import React from "react";

export default function Hamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.125 9.625L6.875 9.62503M26.125 16.5H12M26.125 23.375H6.875"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
