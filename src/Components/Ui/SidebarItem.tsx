import type { ReactElement } from "react"

interface SidebarItemsProps{
    text : string,
    icon : ReactElement
}



export const SidebarItems = (props : SidebarItemsProps) => {
    return <div className="flex items-center gap-3 pl-6 ">
        {props.icon}
        <div className="text-xl font-medium">{props.text}</div>
    </div>
}   