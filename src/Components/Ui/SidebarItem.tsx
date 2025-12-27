import type { ReactElement } from "react"

interface SidebarItemsProps{
    text : string,
    icon : ReactElement
}



export const SidebarItems = (props : SidebarItemsProps) => {
    return <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 py-2 px-4 rounded-md">
        {props.icon}
        <div className="text-xl font-medium">{props.text}</div>
    </div>
}   