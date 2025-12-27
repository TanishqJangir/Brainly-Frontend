import { DocumentIcon } from "../../Icons/DocumentIcon"
import { HashtagIcon } from "../../Icons/HashtagIcon"
import { VideoIcon } from "../../Icons/VideoIcon"
import { XIcon } from "../../Icons/XIcon"
import { SidebarItems } from "./SidebarItem"
import { LinkIcon } from "../../Icons/LinkIcon"

export const Sidebar = () => {
    return <div className="w-72 h-screen fixed left-0 top-0 bg-white border-r flex flex-col gap-3">
        <SidebarItems text={"Twitter"} icon={<XIcon size={"lg"}/>} />
        <SidebarItems text={"Youtube"} icon={<VideoIcon size={"lg"}/>} />
        <SidebarItems text={"Documents"} icon={<DocumentIcon size={"lg"}/>} />
        <SidebarItems text={"Links"} icon={<LinkIcon size={"lg"}/>} />
        <SidebarItems text={"Tags"} icon={<HashtagIcon size={"lg"}/>} />
    </div>
}