import type { IconProps } from "./iconsInterface";
import { iconSizeVarients } from "./iconsInterface";


export const VideoIcon = (props : IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={iconSizeVarients[props.size]}>
  <path d="M23.498 6.186a2.996 2.996 0 0 0-2.11-2.117C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.388.569A2.996 2.996 0 0 0 .502 6.186 31.05 31.05 0 0 0 0 12a31.05 31.05 0 0 0 .502 5.814 2.996 2.996 0 0 0 2.11 2.117C4.495 20.5 12 20.5 12 20.5s7.505 0 9.388-.569a2.996 2.996 0 0 0 2.11-2.117A31.05 31.05 0 0 0 24 12a31.05 31.05 0 0 0-.502-5.814Z" />
  <path d="M9.75 15.5 15.5 12 9.75 8.5v7Z" />
</svg>

}