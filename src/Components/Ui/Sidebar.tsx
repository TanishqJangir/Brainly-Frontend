import { DocumentIcon } from "../../Icons/DocumentIcon"
import { HashtagIcon } from "../../Icons/HashtagIcon"
import { VideoIcon } from "../../Icons/VideoIcon"
import { XIcon } from "../../Icons/XIcon"
import { SidebarItems } from "./SidebarItem"
import { LinkIcon } from "../../Icons/LinkIcon"
import { Logo } from "../../Icons/Logo"

export const Sidebar = () => {
    return <div className="w-72 h-screen fixed left-0 top-0 bg-white border-r flex flex-col gap-12">
        <div className="flex gap-3 items-center pl-4 pt-6 text-primary">
            <Logo size={"3xl"} />
            <div className="text-2xl font-mono font-bold text-black">
                Brainly
            </div>
        </div>


        <div className="flex flex-col pl-4 w-3xs">
            <SidebarItems text={"Twitter"} icon={<XIcon size={"lg"} />} />
            <SidebarItems text={"Youtube"} icon={<VideoIcon size={"lg"} />} />
            <SidebarItems text={"Documents"} icon={<DocumentIcon size={"lg"} />} />
            <SidebarItems text={"Links"} icon={<LinkIcon size={"lg"} />} />
            <SidebarItems text={"Tags"} icon={<HashtagIcon size={"lg"} />} />
        </div>
    </div>
}