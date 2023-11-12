import React, { SVGProps } from 'react'

export function StopButton(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="84" height="27" viewBox="0 0 84 27" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path id="Rounded-Rectangle" fill="#de5845" fillRule="evenodd" stroke="none" d="M 2 20 C 2 23.865993 5.134007 27 9 27 L 75 27 C 78.86599 27 82 23.865993 82 20 L 82 7 C 82 3.134007 78.86599 0 75 0 L 9 0 C 5.134007 0 2 3.134007 2 7 Z"/>
    <text id="STOP" x="27" y="20" fontSize="17.478481" fontWeight="600" fill="#ffffff" letterSpacing="0.34957">STOP</text>
    <path id="Rectangle" fill="#ffffff" fillRule="evenodd" stroke="none" d="M 10 20 L 23 20 L 23 7 L 10 7 Z"/>
</svg>
  )
}
export default StopButton