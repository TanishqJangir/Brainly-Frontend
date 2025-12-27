import type { IconProps } from "./iconsInterface";
import { iconSizeVarients } from "./iconsInterface";


export const VideoIcon = (props : IconProps) => {
    return <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className={iconSizeVarients[props.size]}
>
  <path 
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8Z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M10 15.5 15 12 10 8.5v7Z"
  />
</svg>


}