import type { IconProps } from "./iconsInterface"
import  {iconSizeVarients}  from "./iconsInterface"


export const PlusIcon = (props : IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={iconSizeVarients[props.size]} onClick={props.onClick}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

}