import type { IconProps } from "./iconsInterface";
import { iconSizeVarients } from "./iconsInterface";


export const CrossIcon = (props : IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${iconSizeVarients[props.size]} cursor-pointer hover:border hover:rounded`} onClick={props.onClick}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>  

}