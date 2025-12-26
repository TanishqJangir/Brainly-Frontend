import type { ReactElement } from "react"

interface SidebarItemsProps{
    text : string,
    icon : ReactElement
}



export const SidebarItems = (props : SidebarItemsProps) => {
    return <div className="flex">
        {props.icon}
        <div>{props.text}</div>
    </div>
}   